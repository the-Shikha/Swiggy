import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";
    
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([])
    const [filterRestaurant,setFilterRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //console.log(json)
        //console.log(json?.cards[3].card?.card?.gridElements?. infoWithStyle?.restaurants)
       // setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return <h1 className="text-center text-orange-500 text-xl font-semibold mt-10">Looks like you're offline! Check your internet connection.</h1>
    }

    if (!listOfRestaurants || listOfRestaurants.length === 0) {
        return <Shimmer/>;
      }
    const {loggedInUser,setUserName}=useContext(UserContext)
    return (
        <div className="p-4 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                    <input type="text" placeholder="Search restaurants..." className="px-4 py-2 border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-1/2" onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className=" px-4 py-2 text-white border bg-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition" onClick={()=>{
                        const filteredRestraunts = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestaurant(filteredRestraunts)
                        setSearchText("")
                    }}>Search</button>
                </div>
                <input className="border border-black p-2" type="text" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
            <div className="mb-6">
                
                <button className="px-4 py-2 text-white border bg-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition" onClick={()=>{
                    const filteredData=listOfRestaurants?.filter((res)=>
                        res.info.avgRating >=4.3
                    )
                    setFilterRestaurant(filteredData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {filterRestaurant.map((restaurant)=>(
                    <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id} className="hover:scale-105 transition-transform duration-200" ><RestaurantCard resData={restaurant}/></Link>
                ))}
                
                
            </div>
        </div>
    )
}
export default Body;