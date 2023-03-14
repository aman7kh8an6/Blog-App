import { createBrowserRouter,RouterProvider,Route,Outlet } from "react-router-dom";
import { useState } from 'react';
import { LoginContext } from './context/AuthContext' 
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import './style.css';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:id",
    element: <Single />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [currentUser,setCurrentUser] = useState({isLoggedIn : false, userId : "", username: "",email : "", profileImg : ""});
  return (
    <LoginContext.Provider value = {{currentUser,setCurrentUser}}>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
