import { createBrowserRouter } from "react-router";
import App from "./App";

import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Category from "./Pages/Category";
import NotFound from './Pages/NotFound'
import RecipeDeatils from "./Pages/RecipeDeatils";
import CategoryDetails from './Pages/CategoryDetails'

const router=createBrowserRouter([
    {

        path:"/",
        element:<App/>,
        errorElement:<NotFound />,
        children:[{
            index:true,
            element:<Home />
        },
        {
            path:"Recipe",
            element:<Recipe/>
        },
        ,
        {
            path:"Recipe/:RecipeId",
            element:<RecipeDeatils/>
        },
        {
            path:"categories",
            element:<Category/>,
            children: [
          {
            path: ':categoryId',
            element: <CategoryDetails />,
          },
        ],
        },

    ]
    }
])

export default router;