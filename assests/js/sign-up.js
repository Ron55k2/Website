import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';

async function signup(){
    createUserWithEmailAndPassword(auth, getElementById("name") ,getElementById("email"), getElementById("pass"))
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}