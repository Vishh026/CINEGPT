import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeUser } from "../utils/store/reducers/UserSlice";

const Body = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false); // Track auth initialization

  const AppRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(adduser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
      setAuthChecked(true); // Auth check completed
    });

    return () => unSubscribe();
  }, [dispatch]);

  // Show nothing or a loader until Firebase auth is ready
  if (!authChecked) return <div>Loading...</div>;

  return <RouterProvider router={AppRouter} />;
};

export default Body;
