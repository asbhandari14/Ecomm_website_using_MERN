import React from 'react'
import { IoCart } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa";




const SideAdminNav = () => {
    return (
        <>
            <div className="side_admin_nav_container w-[20%] min-h-[85vh] flex flex-col items-center justify-start gap-3 pt-8 border-2 border-black">
                <NavLink to="/addProductAdmin"><div className='w-[80%] flex justify-between items-center p-3 bg-zinc-400 text-white'><IoCart className='text-3xl text-black' /> <span className=' font-semibold cursor-pointer'>Add Product</span></div></NavLink>
                <NavLink to="/productListAdmin"><div className='w-[80%] flex justify-between items-center p-3 bg-zinc-400 text-white'><FaClipboardList className='text-3xl text-black' /> <span className='text-lg font-semibold cursor-pointer'>Product List</span></div></NavLink>
            </div>
        </>
    )
}

export default SideAdminNav
