import React, { useEffect,useState } from 'react'

const useRestaurantMenu = (id) => {
    const [resInfo,setResInfo]=useState(null);
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+id)

        const json=await data.json();
        setResInfo(json?.data)
    }
    useEffect(()=>{
        fetchData();
    },[])
    
    return resInfo;
}

export default useRestaurantMenu
