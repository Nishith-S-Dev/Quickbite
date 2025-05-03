import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header"
import Body from "./src/Components/Body"
import Footer from "./src/Components/Footer"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import About from "./src/Components/About"
import Contact from "./src/Components/Contact"
import  Error from "./src/Components/Error"
import Cart from "./src/Components/Cart"
import { Outlet } from "react-router-dom"
import RestruantMenu from "./src/Components/RestruantMenu"

const App = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
           
            {
                path:"/about",
                element:<About/>,
                errorElement:<Error/>
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<Error/>
            }
            ,
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>
            }
            ,
            {
                path:"/cart",
                element:<Cart/>,
                errorElement:<Error/>
            },
            {
                path:"/restraunt/:id",
                element:<RestruantMenu/>,
                errorElement:<Error/>
            }
        ]
    }
    
])
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
