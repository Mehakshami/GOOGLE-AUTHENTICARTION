
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyD1BLWCtiB7Fr5_ObfRfWwZ811F76Z2xDQ",
    authDomain: "authentication-a8cba.firebaseapp.com",
    projectId: "authentication-a8cba",
    storageBucket: "authentication-a8cba.firebasestorage.app",
    messagingSenderId: "688839195010",
    appId: "1:688839195010:web:9cbe5655f2e09e7f8a779b",
    measurementId: "G-13KK8H7MP0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 const submit = document.getElementById("signup")
 submit.addEventListener("click",function(event){
    event.preventDefault()
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      alert('logged in');
      window.location.href = "success.html"
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

 })

