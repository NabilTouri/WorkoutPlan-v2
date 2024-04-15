import { redirect } from "@sveltejs/kit"

export const load = async ({ cookies, url, parent }) => {
    const { user } = await parent()
    const title = user ? `${user.name}'s profile` : 'Profile'
    if (!cookies.get('session_token')) {
        throw redirect(307, `/auth/login?redirectTo=${url.pathname}`)
    }

    return {
        title,
        user
    }
}