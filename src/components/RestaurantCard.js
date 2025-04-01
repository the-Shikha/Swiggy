import { CDN_URL } from "../utils/constants"

const RestaurantCard=(props)=>{
    const {resData}=props
    const {name,cuisines,avgRating,costForTwo,sla,id}=resData?.info
    return(
        <div className='res-card'>
            <img className='res-logo' src={CDN_URL+resData.info.cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating}</p>
            <h4>{costForTwo}</h4>
            <p>{sla.deliveryTime} minutes</p>
        </div>
    )
}
export default RestaurantCard