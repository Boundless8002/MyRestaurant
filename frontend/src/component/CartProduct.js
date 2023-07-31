import React from 'react'
import {TiPlus} from "react-icons/ti"
import {TiMinus} from "react-icons/ti"
import {MdDelete} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { deleteCartItem ,increaseQty,decreaseQty} from '../redux/productSlice'

const CartProduct = ({id,name,category,price,qty,total,image}) => {
  
  const dispatch=useDispatch()
  return (
    <div className="bg-slate-500 p-2 flex gap-4 rounded border border-slate-400">
      <div className="p-3 bg-white overflow-hidden rounded">
    <img src={image} className="w-32 h-28 object-cover"/>
      </div>
    
      <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between">
        <h3 className="font-semibold text-slate-700 md:text-2xl capitalize ">{name}</h3>
        <span className="cursor-pointer text-2xl hover:text-red-600" onClick={()=>dispatch(deleteCartItem(id))}><MdDelete/></span></div>
      <p className="font-medium text-slate-800 md:text-xl">{category}</p>
      <p className="font-bold text-red-800 md:text-xl ">{price}</p>

      <div className="flex justify-between">

      
      <div className="flex gap-4 rounded-full ">
      <button className="bg-blue-800 text-xl px-3 py-2 font-md mt-2 text-white rounded-full hover:bg-blue-900" onClick={()=>dispatch(increaseQty(id))}><TiPlus/></button>
      <p className="flex items-center font-bold">{qty}</p>
      <button onClick={()=>dispatch(decreaseQty(id))} className="bg-blue-800 text-xl px-3 py-2 font-md mt-2 text-white rounded-full hover:bg-blue-900"><TiMinus/></button>
      </div>
      <div className="flex items-center font-bold">
        <p className="">Total : </p>
        <p className="">{total}</p>
      </div>
      </div>
        </div>
    </div>
  )
}

export default CartProduct
