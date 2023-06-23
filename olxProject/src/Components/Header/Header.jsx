import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { FirebaseContext } from '../../store/Context';
import { getAuth, signOut } from 'firebase/auth';


function Header() {
  const {user} = useContext(AuthContext)
  const{firebaseApp}=useContext(FirebaseContext)
  const navigate=useNavigate()

  const loginUser=()=>{
    navigate('/login');
  }

  const handleSignout=()=>{
    const auth = getAuth(firebaseApp);
    signOut(auth)
      .then(() => {
        // Sign out successful
        navigate('/login');
      })
      .catch((error) => {
        // An error occurred while signing out
        console.log(error);
      });
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>navigate('/')}>
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          
        {user && <span >Welcome {user.displayName}</span>}
        {!user && <span onClick={loginUser}>Login</span>}
           <hr />
           </div>
        {user&&<span className='logout' onClick={handleSignout}>logout</span>}

        <div className="sellMenu" onClick={()=>navigate('/create')}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
