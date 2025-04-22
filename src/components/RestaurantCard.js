import { useContext } from "react"
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext"

const RestaurantCard=(props)=>{
    const {resData}=props
    const {name,cuisines,avgRating,costForTwo,sla,id}=resData?.info

    const {loggedInUser}=useContext(UserContext)
    return(
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-orange-100 p-4">
            <img className="w-full h-40 object-cover rounded-lg mb-4" src={CDN_URL+resData.info.cloudinaryImageId} alt="" />
            <h3 className="text-lg font-semibold text-black mb-1">{name}</h3>
            <p className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</p>
            <p className="text-sm text-green-700 font-medium mb-1">⭐ {avgRating}</p>
            <h4 className="text-sm text-gray-700 mb-1">{costForTwo}</h4>
            <p className="text-sm text-gray-700">⏱ {sla.deliveryTime} minutes</p>
            <p>{loggedInUser}</p>
        </div>
    )
}
export default RestaurantCard