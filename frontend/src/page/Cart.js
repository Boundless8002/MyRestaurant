import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'
import emptycart from "../assest/emptycart.gif"
import { toast } from 'react-hot-toast'

import { useNavigate } from "react-router-dom";
import { paymentDone } from '../redux/productSlice'


const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const navigate = useNavigate();


  let productCardItem = useSelector((state) => state.product.cartItem)
  console.log(productCardItem)
  let cartItemNumber = useSelector((state => state.product.cartItem))
  // console.log(cartItemNumber[0])
  const completePayment = () => {

    if (user.email) {
      toast(`Payment Successful with ₹ ${totalPrice},Your order is placed `)
      // productCardItem = "";
      // console.log(productCardItem)
      setTimeout(() => {
        dispatch(paymentDone())
      }, 2000)


    }
    else {
      toast("You are not login");
      setTimeout(() => {
        navigate("/login")
      }, 1000)
    }
  }






  //let result = total. replace(/[^0-9]/g,"");
  const totalPrice = productCardItem.reduce((acc, curr) => acc + parseInt((curr.total).replace(/[^0-9]/g, "")), 0)
  const totalQty = productCardItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0)
  console.log(productCardItem);


  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold md:xl text-slate-800">Your cart items</h2>
        {productCardItem[0] ?
          <div className="my-4 flex gap-4">
            {/* display cart Item */}
            <div className="w-full max-w-3xl">
              {productCardItem.map(el => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    image={el.image}
                    price={el.price}
                    qty={el.qty}
                    total={el.total}
                  />
                )
              })
              }
            </div>

            {/* total cart Item */}
            <div className="w-full max-w-md ml-auto ">
              <h2 className="bg-red-600 text-white text-lg p-2">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Quantity</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Amount</p>
                <p className="ml-auto w-32 font-bold">₹ {totalPrice}</p>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-900 text-white rounded font-bold py-2" onClick={completePayment}>Payment</button>
            </div>
          </div>
          : <>
            <div className="flex justify-center items-center w-full flex-col">
              <img src={emptycart} className="w-full max-w-[400px] m-2 p-4" />
              <p className="text-slate-500 font-bold text-4xl">Empty cart</p>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Cart




