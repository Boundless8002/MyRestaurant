import React, { useState } from 'react'
import loginimage from "../assest/login-animation.gif"
import { BiShow, BiHide } from "react-icons/bi"
import { Link, useNavigate } from 'react-router-dom'
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import toast, { Toaster } from 'react-hot-toast';

const baseurl = "https://foodbackend-solv.onrender.com"
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: ""
  })

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  }

  const handleconfirmPassword = () => {
    setShowconfirmPassword(!showconfirmPassword);
  }
  //console.log(process.env.REACT_APP_SERVER_DOMAIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data

    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(`${baseurl}/signup`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
        const dataRes = await fetchData.json();
        console.log(dataRes);

        toast(dataRes.message)
        if (dataRes.alert) {
          navigate("/login");
        }


      }
      else {
        alert("Something is wrong,please check it")
      }
    }
    else {
      alert("Details Required")
    }
  }
  const handleUploadProfileImage = async (e) => {
    //console.log(e.target.files[0]);
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);

    setData((prev) => {
      return {
        ...prev,
        image: data
      }
    })
  }
  return (
    <div className='p-3 md:p-4'>
      <div className="w-full max-w-sm bg-white m-auto flex flex-col items-center p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative">
          <img src={data.image ? data.image : loginimage} className="w-full h-full" />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-70 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage} />
          </label>
        </div>
        <form className="w-full py-3 flex flex-col " onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type={'text'} id="firstName" name="firstName" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500" value={data.firstName} onChange={handleOnchange} />

          <label htmlFor="lastName">Last Name</label>
          <input type={'text'} id="lastName" name="lastName" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500" value={data.lastName} onChange={handleOnchange} />

          <label htmlFor="email">Email</label>
          <input type={'email'} id="email" name="email" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-500" value={data.email} onChange={handleOnchange} />

          <label htmlFor="password">Password</label>
          <div className="flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline focus-within:outline-blue-500 border-none outline-none ">
            <input type={showPassword ? "text" : "password"} id="password" name="password" className=" w-full bg-slate-200 border-none outline-none " onChange={handleOnchange} value={data.password} /><span className="flex text-xl cursor-pointer" onClick={handleShowpassword}>{showPassword ? <BiShow /> : <BiHide />}</span>
          </div>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline focus-within:outline-blue-500 border-none outline-none ">
            <input type={showconfirmPassword ? "text" : "password"} id="confirmpassword" name="confirmPassword" className=" w-full bg-slate-200 border-none outline-none " value={data.confirmPassword} onChange={handleOnchange} /><span className="flex text-xl cursor-pointer" onClick={handleconfirmPassword}>{showconfirmPassword ? <BiShow /> : <BiHide />}</span>
          </div>
          <button className="w-full m-auto max-w-[120px]  bg-blue-500 hover:bg-blue-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">Sign up</button>
        </form>
        <p>Already have account ? <Link to={"/login"} className="text-red-500 font-medium">Login</Link></p>
      </div>

    </div>
  )
}

export default Signup
