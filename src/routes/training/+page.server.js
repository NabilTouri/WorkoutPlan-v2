import { redirect } from "@sveltejs/kit"

export const load = async ({ cookies, url, fetch }) => {
    // console.log("Home page universal load function called")
    if (!cookies.get('session_token')) {
        throw redirect(307, `/auth/login?redirectTo=${url.pathname}`)
    }
}