import React, { useState } from 'react'
import loginimage from "../assest/login-animation.gif"
import {BiShow,BiHide} from "react-icons/bi"
import { Link ,useNavigate} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../redux/userSlice';

const Login = () => {
  const navigate=useNavigate();
  const [showPassword,setShowPassword]=useState(false);


const [data,setData]=useState({
 
  email:"",
  password:"",
})
const userData=useSelector(state=>state)
//console.log(userData)

const dispatch=useDispatch()

const handleOnchange=(e)=>{
const {name,value}=e.target ;
setData((prev)=>{
  return{
    ...prev,
    [name]:value
  }
})
}

const handleShowpassword=()=>{
  setShowPassword(!showPassword);
}


const handleSubmit = async(e)=>{
  e.preventDefault()
  const {email,password} = data

  if(email && password ){
    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    const dataRes=await fetchData.json()
    console.log(dataRes) ;
    toast(userData.user.firstName + userData.user.lastName + ", " + dataRes.message);  
      if(dataRes.alert){
        dispatch(loginRedux(dataRes))
        navigate("/");
      }
      console.log(userData)
    } 
  else{
    alert("Details are missing")
  }
}
  return (
    <div className='p-3 md:p-4'>
        <div className="w-full max-w-sm bg-white m-auto flex flex-col items-center p-4">
            <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
                <img src={loginimage} className="w-full"/>
            </div>
            <form className="w-full py-3 flex flex-col " onSubmit={handleSubmit}>
                

                <label htmlFor="email">Email</label>
                <input type={'email'} id="email" name="email" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500" value={data.email} onChange={handleOnchange}/>

                <label htmlFor="password">Password</label>
                <div className="flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline focus-within:outline-blue-500 border-none outline-none ">
                <input type={showPassword ? "text" :"password"} id="password" name="password" className=" w-full bg-slate-200 border-none outline-none " onChange={handleOnchange} value={data.password}/><span className="flex text-xl cursor-pointer" onClick={handleShowpassword}>{showPassword ? <BiShow/> : <BiHide/>}</span>
                      </div>

                
                      <button className="w-full m-auto max-w-[120px]  bg-blue-500 hover:bg-blue-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Login </button>
            </form>
            <p>Don't have an account ? <Link to={"/signup"} className="text-red-500 font-medium">Sign up</Link></p>
        </div>
      
    </div>
  )
}

export default Login
