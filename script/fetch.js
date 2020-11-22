import { baseURL } from './utills/settings.js';
import { saveToken, saveUser } from './utills/storage.js';
import { rolled } from './utills/extra.js';

export default loginRequest;

async function loginRequest(name, password) {
	const url = baseURL + '/auth/local';

	const data = JSON.stringify({
		identifier: name,
		password: password
	});

	const option = {
		method: 'POST',
		body: data,
		headers: {
			'Content-Type': 'application/json'
		}
	};

	try {
		const response = await fetch(url, option);
		const json = await response.json();
        
        if(json.user){
            saveToken(json.jwt);
            saveUser(json.user);
            alert('Welcome ' + json.user.username);
            location.href = rolled;
        }

		if (json.error) {
			alert(json.message[0].messages[0].message);
		}
	} catch (error) {
		console.log(error);
	}
}
