import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser, adduser } from "../utils/store/reducers/UserSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { netFlix_logo, supported_lang, User_Avatar } from "../utils/Constants";
import { Search } from "lucide-react";
import { toggleGptSearchView } from "../utils/store/reducers/GptSlice";
import { languageChnage } from "../utils/store/reducers/AppConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptSearch);
  

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const handleSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangugaeChange = (e) => {
    dispatch(languageChnage(e.target.value));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(adduser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when our compoent is unmount
    return () => unSubscribe();
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 px-8 py-2 bg-gradient-to-b from-black z-120 flex justify-between items-center text-yellow-600">
      {/* Logo */}
      <img className="w-44" src={netFlix_logo} alt="Netflix Logo" />

      {/* Sign Out Button */}
      {user && (
        <div className="flex gap-2">
          {showGptSearch && (
            <select
              onChange={handleLangugaeChange}
              className="bg-zinc-800 text-white outline-none px-1"
            >
              {supported_lang.map((lang) => (
                <option
                  className="outline-none bg-transparent"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}


          <button
            onClick={handleSearch}
            className="px-2 py-2 bg-purple-800 rounded-md text-white"
          >
            {" "}
            {showGptSearch ? "Homepage" : "GPTSearch"}
          </button>
          <div>
            <img
              className="w-10 h-10 bg-red-300 "
              src={User_Avatar}
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
