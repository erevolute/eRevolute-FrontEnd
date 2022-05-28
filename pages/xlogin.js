import { Head } from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";

function Login({ title = "Login" }) {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, loginloading, loginerror] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const setCheckbox = (event) => {
    setChecked(event);
  };
  useEffect(() => {
    if (user) {
      router.push("/xadmin");
    }
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    event.target.reset();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    event.target.reset();
  };

  if (loginloading) {
    return  <Spinner className="spinner" animation="border" variant="info" /> ;
  }

  return (
    <>
      {loginloading ? (
       <Spinner className="spinner" animation="border" variant="info" />
      ) : (
        <div className="login">
          <div className="login-form">
            {checked ? (
                <div>
                <h1>Register</h1>
  
                <form onSubmit={handleSubmit}>
                  <input type="email" placeholder="Email" onBlur={handleEmail} />
                  <br />
                  <br />
                  <input type="password" placeholder="Password" onBlur={handlePassword} />
                  <br /> <br />
                  <button id="login" type="submit">Register</button>
                </form>
              </div>
          
            ) : (
              <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" onBlur={handleEmail} />
              <br />
              <br />
              <input type="password" placeholder="Password" onBlur={handlePassword} />
              <br /> <br />
              <button id="login" type="submit">login</button>
            </form>
          </div>
              
            )}
            
            <br />
            {/* <p>
              <input
                onChange={() => setCheckbox(!checked)}
                type="checkbox"
                name=""
                id=""
              />{" "}
              Didnt Register ?{" "}
            </p> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
