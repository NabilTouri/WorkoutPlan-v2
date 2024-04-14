import { json } from '@sveltejs/kit';

export const DELETE = async ({ cookies }) => {
    cookies.delete('session_token', { path: '/' })
    return json({ message: 'Logged out' })
}
