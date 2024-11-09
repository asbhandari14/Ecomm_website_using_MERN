import React, { useState } from 'react'
import { IoCartSharp } from "react-icons/io5";
import { BiSolidMoon } from "react-icons/bi";
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContextConsumer } from '../Context/ShopContext';
import { IoMdSunny } from "react-icons/io";
import { IoMenu } from "react-icons/io5";




const Navbar = () => {
  const [borderStyle, setBorderStyle] = useState('Shop');
  const [mode, setMode] = useState(true);
  const navigate = useNavigate();

  const { darkModeValue, darkMode, findCartLength, tokenValue, logoutUser, setHiddenNavbar, hiddenNavbar} = AppContextConsumer();



  return (
    <>
      <div className={`navbar_outer_container w-full h-20 flex justify-center items-center ${(darkMode) ? "bg-black text-white" : ""}`}>
        <div className="navbar_inner_container container w-[90%] h-full flex justify-between items-center">
          <NavLink to="/"><div className="navbar_logo flex justify-center items-center gap-2" onClick={() => { setBorderStyle("Shop") }}>
            <img src="../Images/nav_logo.png" className='w-16' alt="" />
            <h1 className='text-2xl font-semibold'>Ecomm</h1>
          </div></NavLink>

          <div className="navbar_route flex justify-center items-center gap-12 list-none max-lg:hidden">
            <NavLink to="/"><li className={` cursor-pointer ${(borderStyle == "Shop") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Shop") }}>Shop</li></NavLink>
            <NavLink to="/men"><li className={` cursor-pointer ${(borderStyle == "Men") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Men") }}>Men</li></NavLink>
            <NavLink to="/women"><li className={` cursor-pointer ${(borderStyle == "Women") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Women") }}>Women</li></NavLink>
            <NavLink to="/kids"><li className={` cursor-pointer ${(borderStyle == "Kids") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Kids") }}>Kids</li></NavLink>
          </div>

          <div className="navbar_login flex justify-center items-center gap-8  max-lg:hidden">
            {
              (tokenValue) ? <button className='px-4 py-2 border rounded-3xl uppercase text-sm' onClick={()=>{logoutUser(); navigate("/")}}>Logout</button> : (<NavLink to="/login"><button className='px-4 py-2 border rounded-3xl uppercase text-sm'>Log In</button></NavLink>)
            }
            <NavLink to="/cart"><div className="cart relative">
              <IoCartSharp className='text-2xl relative' />
              <div className=" absolute w-4 h-4 bg-red-600 text-white flex justify-center items-center rounded-xl text-xs -top-1 left-4">{findCartLength()}</div>
            </div></NavLink>
          </div>

          <div className="light_dark_mode cursor-pointer  max-lg:hidden" >
            {
              (mode) ? <BiSolidMoon className='text-2xl' onClick={() => { setMode(!mode); darkModeValue(mode) }} /> : <IoMdSunny className='text-2xl' onClick={() => { setMode(!mode); darkModeValue(mode) }} />
            }
          </div>

          <div className='hidden max-lg:flex text-2xl font-semibold' onClick={()=>{setHiddenNavbar(!hiddenNavbar)}}>
            <IoMenu />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
