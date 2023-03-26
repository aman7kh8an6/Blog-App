import { createBrowserRouter,RouterProvider,Route,Outlet } from "react-router-dom";
import { useState } from 'react';
import { LoginContext, UserPostContext, AllPostContext } from './context/AuthContext' 
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Tags from "./pages/Tags";
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
  {
    path: "/tags/:tag",
    element: <Tags />
  }
]);
// post_id : "", post_userId: "", post_title: "", post_content : "", post_dt_added : "", post_cat : "", post_img: ''
function App() {

  const [currentUser,setCurrentUser] = useState({isLoggedIn : false, userId : "123", username: "aman",email : "aman@aman", profileImg : "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"});
  const [allPosts, setAllPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([{post_id : "", post_userId: "", post_title: "", post_content : "", post_dt_added : "", post_cat : "", post_img: ""}]);
  return (
    <LoginContext.Provider value = {{currentUser,setCurrentUser}}>
      <AllPostContext.Provider value ={{allPosts, setAllPosts}} >
        <UserPostContext.Provider value ={{userPosts, setUserPosts}}>
          <div className="app">
            <div className="container">
              <RouterProvider router={router} />
            </div>
          </div>
        </UserPostContext.Provider>
      </AllPostContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
