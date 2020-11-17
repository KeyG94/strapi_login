import loginRequest from "./fetch.js";

let usernameMessage = document.getElementById('username-message');
let passwordMessage = document.getElementById('password-message');

const form = document.querySelector('#form');

form.onsubmit = function(event){
    event.preventDefault();

    const name = document.querySelector('#form-username').value.trim();
    const password = document.querySelector('#form-password').value.trim();

    if(!name){
        usernameMessage.innerHTML = '* username required';
        usernameMessage.style.color = 'red';
    } else {
        usernameMessage.innerHTML = '';
    };
    
    if(!password){
        passwordMessage.innerHTML = '* password required';
        passwordMessage.style.color = 'red';
    } else {
        passwordMessage.innerHTML = '';
    };

    if(password && name){
        loginRequest(name, password);
    }
};