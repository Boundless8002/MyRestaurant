import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FilterProduct from './FilterProduct';
import CardFeature from './CardFeature';

function AllProduct() {
  const productData = useSelector((state) => state.product.productList)
  const categoryList = [...new Set(productData.map(el => el.category))]
  //console.log(categoryList)

  // filter data to display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData)
  }, [productData])

  const handleFilterProduct = (category) => {
    setFilterBy(category)
    const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
    setDataFilter(() => {
      return [
        ...filter
      ]
    })
  }

  return (
    <div>
      <div className="my-5">
        <h2 className="font-bold text-slate-600 text-2xl mb-4">Your Product</h2>
        <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
          {
            categoryList[0] ? categoryList.map((el) => {
              return (
                <FilterProduct
                  category={el}
                  key={el}
                  isActive={el === filterby}
                  onClick={() => handleFilterProduct(el)} />
              )
            })
              : <div className="flex justify-center items-center min-h-[150px]">
                <p className="text-4xl">Loading...</p></div>
          }

        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {
            dataFilter.map(el => {
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
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AllProduct
