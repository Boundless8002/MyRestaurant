import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AllProduct from '../component/AllProduct';
import { addCartItem } from '../redux/productSlice';

function Menu() {
  // const params=useParams()
  // console.log(params.filterby)
  const dispatch=useDispatch()
  const {filterby} =useParams() ;
  const productData=useSelector(state=>state.product.productList)
 
  const productDisplay=productData.filter(el=>el._id===filterby)[0]
  console.log(productData)
  const handleAddCartProduct=(e)=>{
  
    dispatch(addCartItem(productDisplay))
  
}

  return (
    <div className="p-2 md:p-4">
      <div className="w-full  min-w-[250px] bg-white max-w-xl  m-auto md:flex">
        <div className=" overflow-hidden w-full p-5">
          <img src={productDisplay.image} className="hover:scale-110 transition-all w-full min-w-[250px]"/>
        </div>
        <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-slate-700 md:text-4xl capitalize">{productDisplay.name}</h3>
      <p className="font-medium text-red-500 md:text-2xl">{productDisplay.category}</p>
      <p className="font-bold text-red-500 md:text-2xl ">{productDisplay.price}</p>
      <div className="flex gap-4 rounded-full ">
      <button className="bg-blue-500 text-2xl px-3 py-2 font-md mt-2 text-white rounded-full hover:bg-blue-800">Buy Now</button>
      <button onClick={handleAddCartProduct} className="bg-blue-500 text-2xl px-3 py-2 font-md mt-2 text-white rounded-full hover:bg-blue-800">Add Cart</button>
      </div>
      <div className="flex flex-col">
        <p className="text-slate-500 font-medium">Description :</p>
        <p className="flex max-w-[300px] ">{productDisplay.description}</p>
      </div>
        </div>
      </div>
      <AllProduct heading={"Related Product"}/>
    </div>
  )
}

export default Menu
