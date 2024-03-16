import { redirect } from "@sveltejs/kit"

export const load = async ({ fetch, cookies, url }) => {
    if (!cookies.get('session_token')) {
        throw redirect(307, `/auth/login?redirectTo=${url.pathname}`)
    }

    const response = await fetch('/api/db/user')
    const users = await response.json()
    const user = users.find(user => user.userAuthToken === cookies.get('session_token'))
    if (!user) {
        await fetch('/api/cookies',
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        throw redirect(307, `/auth/login?redirectTo=${url.pathname}`)
    }
    return {
        user
    }
}