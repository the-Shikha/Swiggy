import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    return(
        <div className='header'>
             <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="" srcSet="" />
             </div>
             <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><button onClick={()=>{
                        btnName=="Login"?setBtnName("Logout"):setBtnName("Login")
                    }}  className="login">{btnName}</button></li>
                </ul>
             </div>
        </div>
    )
}


export default Header;