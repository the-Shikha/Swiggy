import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data,showItem, setShowIndex}) => {
    // const [showItem,setShowItem]=useState();
    const handleClick=()=>{
        setShowIndex();
    }
  return (
    <div className="mb-4">
        <div className='bg-white shadow-md rounded-xl p-4 cursor-pointer transition duration-200 hover:shadow-lg'>
           <div className="flex justify-between items-center" onClick={()=>{handleClick()}}>
                <span className="font-semibold text-lg text-gray-800">{data.title}({data.itemCards.length})</span>
                <span className={`transition-transform duration-300 text-xl ${showItem ? 'rotate-180' : ''}`}>🔽</span>
            </div>
            <div className=''>
                {showItem && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    </div>
  )
}

export default RestaurantCategory













