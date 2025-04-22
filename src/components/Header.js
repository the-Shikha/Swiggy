import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext)
    const cart=useSelector((store)=>store.cart.items)
    //console.log(cart)
    return(
        <div className="sticky top-0 z-50 bg-white shadow-md flex justify-between items-center px-6 py-4">
             <div className="flex items-center space-x-4">
                <img className="w-30 h-30 object-contain " src={LOGO_URL} alt="" srcSet="" />
             </div>
             <div className=''>
                <ul className="flex space-x-6 items-center text-gray-600 font-medium">
                    <li className="text-lg">Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                    <li><Link to="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
                    <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                    <li><Link to="/cart" className="hover:text-orange-500 transition-colors">Cart ({cart.length} items)</Link></li>
                    <li><Link to="/grocery" className="hover:text-orange-500 transition-colors">Grocery</Link></li>
                    <li><button onClick={()=>{
                        btnName=="Login"?setBtnName("Logout"):setBtnName("Login")
                    }}  className="px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">{btnName}</button></li>
                    <li>{loggedInUser}</li>
                </ul>
             </div>
        </div>
    )
}


export default Header;