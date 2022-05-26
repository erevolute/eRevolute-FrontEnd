import { Head } from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";

function Login({ title = "Login" }) {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword,  loginloading, loginerror] =
    useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const router = useRouter()

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
  useEffect(()=>{
    if(user){
      router.push('/xadmin')
    }
  })
  console.log(user?.email)
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

  return (
    <div className="login">
   
      <div>
        {checked ? (
          <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
              <input type="email" onBlur={handleEmail} />
              <br />
              <br />
              <input type="password" onBlur={handlePassword} />
              <br /> <br />
              <button type="submit">Register</button>
            </form>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input type="email" onBlur={handleEmail} />
              <br />
              <br />
              <input type="password" onBlur={handlePassword} />
              <br /> <br />
              <button type="submit">login</button>
            </form>
          </div>
        )}
        <p>
          <input
            onChange={() => setCheckbox(!checked)}
            type="checkbox"
            name=""
            id=""
          />{" "}
          Already register ?{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
