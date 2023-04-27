import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout";
import HomePage from "../pages/homePage";
import BookDetails from "../pages/bookDetails";
import AdminLayout from "../layouts/AdminLayout";
import BookList from "../pages/admin/adminBookList";
import AddBook from "../pages/admin/AddBook";
export const routes =createBrowserRouter ([
    {
        path:"/",
        element:<HomeLayout/>,
        children: [{
            path:"",
            element:<HomePage/>
        },
        {
        path:"/about",
        element:"about me"
        },
        {
            path:"/book/:id",
            element:<BookDetails/>
        }
    ]
},
{
    path:"/admin",
    element:<AdminLayout/>,
    children: [{
        path: "",
        element: <BookList/>
    },
{
    path:"add_book",
    element:<AddBook/>
}]
}
])
