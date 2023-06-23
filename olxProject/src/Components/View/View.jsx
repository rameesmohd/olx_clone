import React,{useContext,useState,useEffect} from 'react';
import { FirebaseContext } from '../../store/Context';
import {PostContext} from '../../store/PostContext';
import { collection, getDocs, query, where } from "firebase/firestore";
import './View.css';

function View() {
  const[userDetails,setUserDetails]=useState()
  const {postDetails}=useContext(PostContext)
  const {FireBase,db}=useContext(FirebaseContext)
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"), where("id", "==", postDetails.userId));
      const userDetails = [];
      querySnapshot.forEach((doc) => {
        userDetails.push(doc.data());
      });
      setUserDetails(userDetails);
    };
    fetchData();
  },[]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
      { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails[0].username}</p>
          <p>{userDetails[0].phone}</p>
          <p>{userDetails[0].email}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
