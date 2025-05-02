import React from "react"
import logo from "../assets/images/hotelogo.jpg"
const Header =()=>{
    

    return (
        <>
        <div  style={{display:"flex",width:"100%",height:"100px",justifyContent:"space-around",alignItems:"center"}}>

        <div>
            <img src={logo} alt="" style={{width:"100px",borderRadius:"50%",height:"100px",position:"relative",bottom:"-13px"}} />
            <h3></h3>
        </div>
        <div>
            <ul style={{display:"flex",listStyle:"none",gap:"30px",fontSize:"20px"}}>
                <li>Home</li>
                <li>About Us </li>
                <li>Contact Us</li>
                <li>Service</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
        </>
       
    )
}
export default Header;