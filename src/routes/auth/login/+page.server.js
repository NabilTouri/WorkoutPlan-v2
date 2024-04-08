import { fail } from "@sveltejs/kit"
import bcrypt from 'bcrypt'
import { mysqlconnFn } from "../../../hooks.server"
import { redirect } from '@sveltejs/kit'
import { v4 as uuidv4 } from 'uuid'

const sessions = {}

export const load = async () => {
    const title = "Login"
    return {
        title
    }
}

export const actions = {
    login: async ({ request, cookies, url }) => {
        const mysqlconn = await mysqlconnFn();
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
        const users = await mysqlconn.query("SELECT * FROM user")
            .then(function([rows,fields]) {
                // console.log(rows);
                return rows;
            });
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
        const sessionToken = uuidv4();
        // Set the expiration date of the session token
        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + 1)
        // Set the session token in the sessions object
        sessions[sessionToken] = {
            userId: user.id,
            expiresAt,
        };
        // Set the session token in the user's cookies
        cookies.set('session_token', sessionToken, {
            path: '/', // Specifica il percorso del cookie
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            expires: expiresAt
        });
        // Update the user's session token in the database
        await mysqlconn.query("UPDATE user SET userAuthToken = ? WHERE id = ?", [sessionToken, user.id])
        // Redirect the user to the page they were trying to access
        throw redirect(303, url.searchParams.get('redirectTo') || '/')
    }
}