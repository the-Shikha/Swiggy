import React, { useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const {id}=useParams()
    //custom hook
    const resInfo=useRestaurantMenu(id);
    const [showIndex,setShowIndex]=useState(0);

    if(resInfo===null){
        return <Shimmer/>
    }
    const {name,avgRatingString,totalRatingsString,cuisines,areaName,costForTwoMessage,sla}=resInfo?.cards[2]?.card?.card?.info
    //const {itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    //console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    //console.log(resInfo)
    const categories=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)
    
    return (
        <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-10 border border-gray-200">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{name}</h1>
                <div className="text-gray-700 space-y-1">
                    <p className="text-base sm:text-lg">{avgRatingString}({totalRatingsString}) - {costForTwoMessage}</p>
                    <p className="text-sm sm:text-base">{cuisines.join(",")}</p>
                    <p className="text-sm sm:text-base">Outlet - {areaName}</p>
                    <p className="text-sm sm:text-base">{sla.maxDeliveryTime}mins</p>
                </div>
            </div>
            <hr  className="border-t border-gray-300 mb-8" ></hr>
            <div className="space-y-6">
                {categories.map((category,index)=><RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} 
                    showItem={index===showIndex?true:false}
                    setShowIndex={()=>{setShowIndex(index)}}
                />)}
            </div>
            
        </div>
    )
}
export default RestaurantMenu