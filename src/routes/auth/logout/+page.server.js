import { redirect } from "@sveltejs/kit"

export const load = async ({ cookies }) => {
    if (cookies.get('session_token')) {
        cookies.delete('session_token', { path: '/' })
    }
    
    return redirect(307, '/')
}