import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const load = async () => {
	const title = 'Register';
	return {
		title
	}
}

export const actions = {
	register: async ({ request, fetch }) => {
		//get the form data
		const data = await request.formData();
        const name = data.get('name');
        const surname = data.get('surname');
        const age = data.get('age');
        const gender = data.get('gender')
		const username = data.get('username');
		const password = data.get('password');
		const confirmPassword = data.get('confirmPassword');
		//check if the username and password are not empty
		if (!username || !password || !confirmPassword) {
			return fail(400, {
				username,
				message: 'Complete all the fields'
			});
		}
		//check if the username is already in use
		const response = await fetch('/api/db/user');
		const users = await response.json();
		const usernames = users.map((user) => user.username);
		if (usernames.includes(username)) {
			return fail(400, {
				username,
				message: 'Username already in use'
			});
		}
		//check if the password and the confirm password match
		if (password !== confirmPassword) {
			return fail(400, {
				username,
				message: 'Passwords do not match'
			});
		}
		//check if the password satisfies the requirements
		if (checkPasswordLength(password) && checkPasswordComplexity(password)) {
			console.log('Password meets the length and complexity requirements.');
			//hash the password
			const hashedPassword = bcrypt.hashSync(password, 10); // The second argument is the cost of hashing
			//send the data to the server
			await fetch('/api/db/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                    name,
                    surname,
                    age,
                    gender,
					username,
					hashedPassword
				})
			});
			throw redirect(303, '/auth/login');
		} else {
			return fail(400, {
				username,
				message: 'Password does not meet the requirements'
			});
		}
	}
};
//check if the password length is at least 8 characters
function checkPasswordLength(password) {
	return password.length >= 8;
}
//check if the password contains at least one lowercase letter, one uppercase letter, one number and one special character
function checkPasswordComplexity(password) {
	const lowerCaseRegex = /[a-z]/;
	const upperCaseRegex = /[A-Z]/;
	const numberRegex = /[0-9]/;
	const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
	return (
		lowerCaseRegex.test(password) &&
		upperCaseRegex.test(password) &&
		numberRegex.test(password) &&
		specialCharacterRegex.test(password)
	);
}
