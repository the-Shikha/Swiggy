import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
    
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1")
        const json=await data.json();
        console.log(json)
        //console.log(json?.cards[3].card?.card?.gridElements?. infoWithStyle?.restaurants)
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    if (!listOfRestaurants || listOfRestaurants.length === 0) {
        return <Shimmer/>;
      }

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                    const filteredData=listOfRestaurants?.filter((res)=>
                        res.info.avgRating >4.5
                    )
                    setListOfRestaurants(filteredData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {listOfRestaurants && listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={resData.info.id} resData={restaurant}/>
                ))}
                
                
            </div>
        </div>
    )
}
export default Body;