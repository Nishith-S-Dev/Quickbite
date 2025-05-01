import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Components/Header"
import Body from "./src/Components/Body"
import Footer from "./src/Components/Footer"

const App = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
