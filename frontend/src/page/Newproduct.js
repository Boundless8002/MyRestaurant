import React, { useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { toast } from 'react-hot-toast';

const baseurl = "https://foodbackend-solv.onrender.com"
const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: ""
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    const { name, category, image, price } = data

    if (name && category && image && price) {
      const fetchData = await fetch(`${baseurl}/uploadProduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const fetchRes = await fetchData.json()
      console.log(fetchRes);
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        }
      })
    }
    else {
      toast("Enter the required Fields")
    }

  }

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);


    setData((prev) => {
      return {
        ...prev,
        image: data
      }
    })
  }
  return (
    <div className="p-4">
      <form className="m-auto w-full max-w-md shadow flex flex-col p-3 " onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className="bg-slate-200 p-1 my-1" type={"text"} name="name" onChange={handleOnChange} value={data.name} />

        <label htmlFor="category">Category</label>
        <select className="bg-slate-200 p-1 my-1" id="category" name="category" onChange={handleOnChange} value={data.category}>
          <option>Select</option>
          <option>Fruits</option>
          <option>Vegatables</option>
          <option>Icecream</option>
          <option>Dosa</option>
          <option>Pizza</option>
          <option>Cake</option>
          <option>Burger</option>
          <option>Rice</option>
          <option>Fast-Food</option>
          <option>others</option>
        </select>
        <label htmlFor="image">Image
          <div className="h-40 w-full bg-slate-300 rounded flex items-center justify-center cursor-pointer">

            {
              data.image ? <img src={data.image} className="h-full" /> : <span className="text-5xl"><BsCloudUpload /></span>
            }

            <input type={"file"} accept="image/* " id="image" name="image" onChange={uploadImage} className="hidden" />
          </div></label>

        <label htmlFor="price" className="my-1">Price</label>
        <input className="bg-slate-200 p-1 my-1" type={"text"} name="price" onChange={handleOnChange} value={data.price} />

        <label htmlFor="description">Description</label>
        <textarea row={2} className="bg-slate-200 p-1 my-1 resize-none" name="description" onChange={handleOnChange} value={data.description}></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold my-4">Save</button>
      </form>
    </div>
  )
}

export default Newproduct
