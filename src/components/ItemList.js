import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemList = ({items}) => {
    const dispatch=useDispatch()
    //console.log(items)
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
  return (
    <div >
        {items.map((item)=>(
            <div key={item.card.info.id} className='flex justify-between my-5 border-b-1'>
                <div className='w-10/12 flex-row'>
                    <div className='font-semibold'>{item.card.info.name}</div>
                    <div>₹{item.card.info.price/100}</div>
                    <div className='text-sm'>{item.card.info.description}</div>
                </div>
                <div >
                        <span className='bg-white text-green-600 mx-auto font-semibold rounded-md py-2 px-6 absolute' onClick={()=>{handleAddItem(item)}}>ADD +</span>
                        <img className='w-40 rounded-lg mb-2' src={CDN_URL+item.card.info.imageId} alt=""/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList


