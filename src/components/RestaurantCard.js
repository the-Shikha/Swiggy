import { CDN_URL } from "../utils/constants"

const RestaurantCard=(props)=>{
    const {resData}=props
    const {name,cuisines,avgRating,costForTwo,sla,id}=resData?.info
    return(
        <div className='res-card'>
            <img className='res-logo' src={CDN_URL+resData.info.cloudinaryImageId} alt="" />
            <h3 className="res-name">{name}</h3>
            <p className="res-cuisine">{cuisines.join(", ")}</p>
            <p className="res-rating">⭐ {avgRating}</p>
            <h4 className="res-price">{costForTwo}</h4>
            <p className="res-time">⏱ {sla.deliveryTime} minutes</p>
        </div>
    )
}
export default RestaurantCard