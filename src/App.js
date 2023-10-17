// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import app from "./firebase.init";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import Login from "./components/Login/Login";
// import Login from "./components/Login";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const gitprovider = new GithubAuthProvider();
  const handleGoogleSign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // console.log("working")
  };
  const handleGitSign = ()=>{
    signInWithPopup(auth,gitprovider)
    .then((result)=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    });





  }
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      {user.email ? (
        <button onClick={handleGoogleSignOut}>Google SignOut</button>
      ) : (
        <div>
          <button onClick={handleGoogleSign}>Google SignIn</button>
        <button onClick={handleGitSign}>Google GiTHUBSignIn</button>
        </div>
      )}

      <h1>Name:{user.displayName}</h1>
      <h1>Your Email Name:{user.email}</h1>
      <img alt="" src={user.photoURL} /> 
      







    </div>
  );
}

export default App;
