import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Homecard from '../component/Homecard'
import CardFeature from '../component/CardFeature'
import { GrPrevious } from "react-icons/gr"
import { GrNext } from "react-icons/gr"
import FilterProduct from '../component/FilterProduct'
import AllProduct from '../component/AllProduct'



function Home() {
  const productData = useSelector((state) => state.product.productList)
  const categoryList = [...new Set(productData.map(el => el.category))]
  // console.log(productData)
  const homeProductCartList = productData.slice(1, 5)
  const homeProductCartListVegetables = productData.filter(el => el.category === "Vegatables", [])
  // console.log(homeProductCartListVegetables)

  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

  const slideProductRef = useRef()


  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }
  const previousProduct = () => {
    slideProductRef.current.scrollLeft -= 200
  }

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn1.iconfinder.com/data/icons/logistics-transportation-vehicles/202/logistic-shipping-vehicles-002-512.png"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">Good food!<span className="text-red-600">Good mood </span></h2>
          <p className="text-4xl md:text-7xl font-bold py-3 text-blue-900">Flat 30% off</p>
          <p className="py-3 text-base">One of the best vegetarian restaurants online,we promises delicious food and delightful service. This place serves delectable Rajasthani cuisine and you can eat all you want. The food is unlimited. There are so many different things they offer in Thali that your taste buds will not get enough of the lip-smacking food. Even the staff is polite and courteous. They greet and attend everyone with a smile on their face.</p>

          <button className="bg-blue-700 text-white rounded-full w-full">Order Now</button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 justify-center">
          {
            homeProductCartList[0] ? homeProductCartList.map((el) => {
              return (
                <Homecard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />

              )
            })
              : loadingArray.map((el, index) => {
                return (
                  <Homecard
                    key={index}
                    loading={"Loading..."}
                  />
                )
              })
          }

        </div>
      </div>
      <div >
        <div className="flex w-full items-center">
          <h2 className="font-bold text-slate-600 text-2xl mb-4">Fresh Vegatables</h2>
          <div className="ml-auto flex gap-4">
            <button onClick={previousProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrPrevious /></button>
            <button onClick={nextProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrNext /></button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
        {
          homeProductCartListVegetables[0] ? homeProductCartListVegetables.map(el => {
            return (
              <CardFeature
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                category={el.category}
                price={el.price}

              />
            )
          }) : loadingArrayFeature.map((el, index) => {
            return (
              <CardFeature
                key={index}
                loading={"Loading..."}
              />
            )
          })

        }
      </div>
      <AllProduct heading={"Your Product"} />

    </div>
  )
}

export default Home
