import React from "react"
import ReactDOM from "react-dom"

const App = ()=>{
    return(
        <>
        <h1>Hello this is from react</h1>
        </>
    )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
