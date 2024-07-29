import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO_PATH, USER_ICON_PATH } from '../utils/Constants';
import { toggleSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/Constants';
import { setLanguage } from '../utils/configSlice'; // Import the setLanguage action
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store.config.language); // Get the current language
  const ShowGptSearch=useSelector(store=>store.gpt.visible)

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

  const handleSearchToggle = () => {
    dispatch(toggleSearch());
  };

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
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
        {ShowGptSearch && (
        <select 
            value={language} 
            onChange={handleLanguageChange} 
            className="px-2 py-2 bg-gray-800 text-white rounded-md">
            {SUPPORTED_LANGUAGES.map(lang => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}=
          </select>
        )}
        <input 
            type="text" 
            placeholder="Search GPT" 
            className="w-80 px-4 py-2 text-black rounded-md focus:outline-none"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white 
          rounded-md hover:from-red-600 hover:to-red-800 transition-colors duration-300" 
          onClick={handleSearchToggle}>
          {ShowGptSearch ? "Homepage":"Search GPT"}
          </button>
          <img className="h-8 w-8" src={USER_ICON_PATH} alt="user-icon" />
          <button onClick={handleSignOut} className="text-white">Sign Out</button>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
