import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
    productList: [],
    cartItem: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            console.log(action)
            state.productList = [...action.payload]
        },
        addCartItem: (state, action) => {
            const check = state.cartItem.some((el) => el._id === action.payload._id)
            //console.log(check)
            if (check) {
                toast("Item already in the cart")
            }
            else {
                toast("Yout item is added in cart")
                const total = action.payload.price
                state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total: total }]
            }

        },
        deleteCartItem: (state, action) => {
            // console.log(action.payload)
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            //  console.log(index)
            state.cartItem.splice(index, 1)
        },
        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            let qty = state.cartItem[index].qty
            const qtyInc = ++qty;

            state.cartItem[index].qty = qtyInc;

            const price = state.cartItem[index].price
            let result = price.replace(/[^0-9]/g, "");
            console.log(result)
            let total = Number(result * qtyInc)
            console.log(total)
            state.cartItem[index].total = " ₹" + total

        },
        decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            let qty = state.cartItem[index].qty
            if (qty > 1) {
                let qtyDec = --qty
                state.cartItem[index].qty = qtyDec;
                const price = state.cartItem[index].price
                let result = price.replace(/[^0-9]/g, "");
                console.log(result)
                let total = Number(result * qtyDec)
                console.log(total)
                state.cartItem[index].total = " ₹" + total

            }


        },
        paymentDone: (state, action) => {
            state.cartItem = [];
        }
    }
})
export const { setDataProduct, addCartItem, deleteCartItem, increaseQty, decreaseQty, paymentDone } = productSlice.actions

export default productSlice.reducer