import React from 'react'
import {ImSpoonKnife} from "react-icons/im"

function FilterProduct({category,onClick,isActive}) {
  return (
    <>
    <div onClick={onClick}>
      <div className={`text-4xl p-5 bg-yellow-400 rounded-full cursor-pointer ${isActive && "bg-yellow-600" }`}>
      <ImSpoonKnife/>
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
    </>
  )
}

export default FilterProduct
