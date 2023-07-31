import React from 'react'
import { Link } from 'react-router-dom'

function Homecard({ image, name, price, category, loading, id }) {
  return (


    <div className="bg-white p-2 shadow-md rounded min-w-[150px]">
      {
        name ?
          <>
            <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
              <div className="w-40 min-h-[150px]">
                <img src={image} className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-slate-700 text-center text-lg capitalize">{name}</h3>
              <p className="text-center font-medium text-red-500">{category}</p>
              <p className="text-center font-bold text-red-500 ">{price}</p>
            </Link>
          </>
          : <div className="flex justify-center items-center h-full">
            <p className="text-4xl">{loading}</p>
          </div>
      }

    </div>
  )
}

export default Homecard
