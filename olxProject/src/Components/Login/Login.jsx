import React,{useState,useContext} from 'react';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../../store/Context';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email , setEmail] = useState('');
  const [password ,setPassword] = useState('')
  const{FireBase}=useContext(FirebaseContext) 
  const auth = getAuth(FireBase);
  const navigate=useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //alert('loggedIn')
      const user = userCredential.user;
      navigate('/')
    })
    .catch((error) => {
      //alert('incurrect')
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br/>
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>navigate('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
