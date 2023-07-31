import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItem, deleteCartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'

function CardFeature({ image, name, price, category, loading, id }) {
  const dispatch = useDispatch()
  const handleAddCartProduct = (e) => {

    dispatch(addCartItem({
      _id: id,
      name: name,
      category: category,
      price: price,
      image: image
    }))

  }
  return (
    <div className="w-full min-w-[280px] max-w-[280px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col">
      {
        name ?
          <>
            <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
              <div className="h-24 flex flex-col justify-center items-center">
                <img src={image} className="h-full" />
              </div>
              <h3 className="font-semibold text-slate-700 text-center text-lg capitalize whitespace-nowrap overflow-hidden">{name}</h3>
              <p className="text-center font-medium text-red-500">{category}</p>
              <p className="text-center font-bold text-red-500 ">{price}</p>  </Link>
            <button className="bg-blue-500 text-2xl w-full font-md mt-2 text-white rounded-full hover:bg-blue-800" onClick={handleAddCartProduct}>Add Cart</button>

          </>
          : <div className="flex justify-center items-center min-h-[150px]">
            <p className="text-4xl">{loading}</p></div>
      }

    </div>
  )
}

export default CardFeature
