export const load = async ({ fetch, cookies }) => {
    if (cookies.get('session_token')) {
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
        }
    }
}