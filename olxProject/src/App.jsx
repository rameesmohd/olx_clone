import {useEffect,useContext} from "react";
import {Routes,Route} from 'react-router-dom'
import { AuthContext } from "./store/Context";
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';

function App() {
  const {user,setUser} = useContext(AuthContext)

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
         const uid = user.uid;
      } else {
        // User is signed out 
      }
    });
  })
  
  return (
    <Post>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/view' element={<View/>} />
      </Routes>
    </Post>
  )
}
export default App
