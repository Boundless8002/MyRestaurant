import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { GrYoutube } from "react-icons/gr"
import { FaWhatsapp } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
      <div className="contactdetail">
        <div className="flex justify-center flex-col items-center">
          <h4 className="text-3xl m-4 p-4 font-bold">Contact Us</h4>
          <span ><strong >Offical Address : </strong>#18 Sector 21 ,Chandigarh <span>Industrial Area PIN-160022</span></span>
          <span ><strong >Contact : </strong>+91 7894510258</span>
          <span ><strong >Email : </strong>customercare@homeshopping.com</span>
        </div>
        <div className="flex text-3xl p-8 gap-4 justify-center items-center">
          <h4 className="text-slate-800 font-medium">Follow us</h4>
          <div className="flex gap-4">
            {/* <a className="text-blue-500" href="https://www.facebook.com/"><BsFacebook /></a>
            <a className="text-blue-500" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><BsTwitter /></a>
            <a className="text-green-300" href="https://www.whatsapp.com/"><FaWhatsapp /></a>
            <a className="text-red-500" href="https://www.youtube.com/"><GrYoutube /></a> */}

            <Link className="text-blue-500" to="https://www.facebook.com/"><BsFacebook /></Link>
            <Link className="text-blue-500" to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><BsTwitter /></Link>
            <Link className="text-green-300" to="https://www.whatsapp.com/"><FaWhatsapp /></Link>
            <Link className="text-red-500" to="https://www.youtube.com/"><GrYoutube /></Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
