import { fail } from "@sveltejs/kit"
import bcrypt from 'bcrypt'
import { redirect } from '@sveltejs/kit'

export const load = async () => {
    const title = "Login"
    return {
        title
    }
}

export const actions = {
    login: async ({ request, fetch, url }) => {
        // Get the form data
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')
        // Check if the username and password are not empty
        if (!username || !password) {
            return fail(400, {
                username,
                message: 'Missing username or password'
            })
        }
        // Check if the user exists
        const response = await fetch('/api/db/user')
        const users = await response.json()
        const user = users.find(user => user.username === username)
        if (!user) {
            return fail(400, {
                username,
                message: 'User not found'
            })
        }
        // Check if the password is correct
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return fail(400, {
                username,
                message: 'Invalid password'
            });
        }
        // Update the user's session token
        await fetch('/api/cookies', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        // Redirect the user to the page they were trying to access
        throw redirect(303, url.searchParams.get('redirectTo') || '/')
    }
}