import { useRef, useState } from "react";
import Header from "./Header";
import CheckValidData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { adduser } from "../utils/store/reducers/UserSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignForm, setIsSignForm] = useState(true);
  const [isErrorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = async () => {
    setErrorMsg(null);

    // Validate form
    const message = CheckValidData(
      email.current.value,
      password.current.value,
      name.current?.value,
      isSignForm
    );
    if (message) {
      setErrorMsg(message);
      return;
    }

    setLoading(true);

    try {
      if (!isSignForm) {
        // SIGN UP
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        // Profile data to set
        const profileData = {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/180160623?v=4",
        };

        // Update profile
        await updateProfile(userCredential.user, profileData);

        // Dispatch using the profileData you just set
        dispatch(adduser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: profileData.displayName,
          photoURL: profileData.photoURL
        }));

        navigate("/");
        console.log("User signed up:", { ...userCredential.user, ...profileData });
      } else {
        // SIGN IN
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        const loggedInUser = auth.currentUser;

        dispatch(adduser({
          uid: loggedInUser.uid,
          email: loggedInUser.email,
          displayName: loggedInUser.displayName,
          photoURL: loggedInUser.photoURL
        }));

        navigate("/browse");
        console.log("User signed in:", loggedInUser);
      }
    } catch (error) {
      console.error("Firebase error:", error);
      setErrorMsg(error.code + " : " + error.message);
    }

    setLoading(false);
  };

  const toggleSigning = () => {
    setIsSignForm(!isSignForm);
    setErrorMsg(null);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <img
        className="w-full h-full object-cover opacity-40"
        src="/Main.png"
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-opacity-80 p-8 rounded-md flex flex-col gap-6 w-[360px] sm:w-[360px] backdrop-blur-md"
        >
          <h1 className="text-white text-2xl font-bold text-center">
            {isSignForm ? "Sign In" : "Sign Up"}
          </h1>

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition"
          />

          {!isSignForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition"
            />
          )}

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition"
          />

          {isErrorMsg && <p className="text-md text-red-500">{isErrorMsg}</p>}

          <button
            type="button"
            onClick={handleClick}
            disabled={loading}
            className={`bg-red-500 py-2 rounded font-semibold hover:bg-red-600 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading
              ? "Processing..."
              : isSignForm
              ? "Sign In Now"
              : "Sign Up Now"}
          </button>

          <p className="text-white text-sm text-center">
            {isSignForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              onClick={toggleSigning}
              className="text-white underline cursor-pointer"
            >
              {isSignForm ? "Sign Up now" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
