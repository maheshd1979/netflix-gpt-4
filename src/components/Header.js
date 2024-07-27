import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO_PATH, USER_ICON_PATH } from '../utils/Constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 z-50 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img className="h-20 w-19" src={NETFLIX_LOGO_PATH} alt="Logo" />
      {user ? (
        <div className="flex items-center space-x-4">
          <img className="h-8 w-8" src={USER_ICON_PATH} alt="user-icon" />
          <button onClick={handleSignOut} className="text-white">Sign Out</button>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
