import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Assuming store.user indicates user authentication status

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log('Sign-out successful.');
      })
      .catch((error) => {
        console.error('An error happened during sign-out:', error);
      });
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="h-20 w-19"
        src={`${process.env.PUBLIC_URL}/images/NETFLIX1.png`}
        alt="Logo"
      />
      {user ? ( // Check if user is logged in
        <div className="flex items-center space-x-4">
          <img
            className="h-8 w-8"
            src={`${process.env.PUBLIC_URL}/images/usericon.png`}
            alt="user-icon"
          />
          <button onClick={handleSignOut} className="text-white">Sign Out</button>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
