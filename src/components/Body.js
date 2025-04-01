import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
    
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState(resList)
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                    const filteredData=listOfRestaurants.filter((res)=>
                        res.info.avgRating >4.5
                    )
                    setListOfRestaurants(filteredData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((restaurant,id)=>(
                    <RestaurantCard key={id} resData={restaurant}/>
                ))}
                
                
            </div>
        </div>
    )
}
export default Body;