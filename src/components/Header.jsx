import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/store/reducers/UserSlice";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    console.log("store user",user)
    const handleClick = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
 navigate('/')
}).catch((error) => {
 navigate('/error')
});
    }
  return (
    <header className="w-full absolute top-0 left-0 px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      {/* Logo */}
      <img
        className="w-44"
        src="/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />


      {/* Sign Out Button */}
{user && (
          <div className="flex gap-2">
        <div>
            <img className="w-10 h-10 bg-red-300 " src={user.photoURL}
        alt="user_photo"/>
        </div>
        <button onClick={handleClick} className="bg-red-600 hover:bg-red-700 transition-all outline-none text-white px-2 py-2 rounded-md font-medium cursor-pointer">
        Sign Out
      </button>
      </div>
)}
    </header>
  );
};

export default Header;
