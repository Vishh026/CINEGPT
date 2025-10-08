import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm,setIsSignForm] = useState(true)

  const toggleSigning = () => {
   setIsSignForm(!isSignForm)
  }

  return (
    <div className="relative w-full h-screen">
      <Header />
      <img
        className="w-full h-full object-cover opacity-40"
        src="/Main.png"
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <form className="bg-opacity-80 p-8 rounded-md flex flex-col gap-10 w-[360px] sm:w-[360px] backdrop-blur-md">
          <h1 className="text-white text-2xl font-bold text-center">{isSignForm ? "Sign In" : "Sign up"}</h1>
          <input
            type="text"
            placeholder="Email or phone number"
            className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition"
          />
         {!isSignForm ? ( <input
            type="text"
            placeholder="Enter Full Name"
            className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition"
          />) : ""}
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition"
          />
          <button className="bg-red-500 py-2 rounded font-semibold hover:bg-red-600 transition">
           {isSignForm ? "Sign In Now" : "Sign up Now"}
          </button>
          <p className="text-white text-sm text-center">
            {isSignForm ? "New to Netflix?" : ""} <span onClick={toggleSigning} className="text-white underline cursor-pointer">{isSignForm ? "Sign up now" : ""}</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
