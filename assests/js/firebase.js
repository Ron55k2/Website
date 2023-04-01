const firebaseConfig = {
    apiKey: "AIzaSyADu-e3Jcf0vYMtv-ZZbU1Qui3xedszBEM",
    authDomain: "eglanto-b0bda.firebaseapp.com",
    projectId: "eglanto-b0bda",
    storageBucket: "eglanto-b0bda.appspot.com",
    messagingSenderId: "564082938580",
    appId: "1:564082938580:web:494857f04ebf31741d2141",
    measurementId: "G-NZMEQ9D5XQ"
};

const app = firebase.initializeApp(firebaseConfig);

async function login(){
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("pass").value)
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