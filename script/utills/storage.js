const tokenKey = 'token';

export function saveToken(token){
    saveToStorage(tokenKey, token);
}

function saveToStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
};

// useful, but not a part of the assignment.
// const userKey = 'user';

// export function getToken(){
//     return getFromStorage(tokenKey);
// }

// export function saveUser(user){
//     saveToStorage(userKey, user)
// }


// function getFromStorage(key){
//    const value = localStorage.getItem(key);

//    if(!value){
//        return [];
//    }
//    return JSON.parse(value);
// }