import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./Pages/NotFoundPage";

import Login from "./Pages/Login";
import ProtectedRouter from "./ProtectedRouter";
import Createpost from "./Pages/Createpost";
import PostDetail from "./Pages/PostDetail";
import Home from "./Pages/Home";

const Router=createBrowserRouter([{
    path:'/',
    element:<App />,
    errorElement:<NotFoundPage />,
    children:[
        {
            index:true,
            element:<Home />
        },
        {
            path:'login',
            element:<Login />
        },
        ,
      {
        path: 'posts/:postId',
        element: <PostDetail />,
      },
        {
            path:'createpost',
            element:(<ProtectedRouter element={<Createpost/>}/>)
        }
    ]
}])

export default Router