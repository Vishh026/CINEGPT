import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser, adduser } from "../utils/store/reducers/UserSlice";
import { useEffect  } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {netFlix_logo, User_Avatar} from "../utils/Constants"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  }

   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(adduser({ uid, email, displayName, photoURL }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    // unsubscribe when our compoent is unmount
    return () => unSubscribe(); 
  }, []);

  return (
    <header className="w-full absolute top-0 left-0 px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center text-yellow-600">
      {/* Logo */}
      <img className="w-44" src={netFlix_logo} alt="Netflix Logo" />

      {/* Sign Out Button */}
      {user && (
        <div className="flex gap-2">
          <div>
            <img
              className="w-10 h-10 bg-red-300 "
              src= {User_Avatar}
              alt="user_photo"
            />
          </div>
          <button
            onClick={handleClick}
            className="bg-red-600 hover:bg-red-700 transition-all outline-none text-white px-2 py-2 rounded-md font-medium cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
