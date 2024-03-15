import { json } from '@sveltejs/kit';
import { mysqlconnFn } from '../../../hooks.server.js'
import { v4 as uuidv4 } from 'uuid';


const sessions = {}

export const PUT = async ({ request, cookies }) => {
    try {
        // Get the user from the request body
        const user = await request.json()
        // Generate a session token
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
        const mysqlconn = await mysqlconnFn();
        await mysqlconn.query("UPDATE user SET userAuthToken = ? WHERE id = ?", [sessionToken, user.id])
        // Return a response
        return json({ message: 'Session token updated' }, { status: 200 });
    } catch (error) {
        console.error('Error during the update of the session token:', error);
        return {
            status: 500,
            body: { error: 'Internal Server Error' }
        };
    }
}