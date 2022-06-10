import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase/firebase";

function Login() {
  const dispatch = useDispatch();
  // const auth = getAuth();
  // const provider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            dispalyName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorMessage);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png"
          alt="gmail-logo"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
