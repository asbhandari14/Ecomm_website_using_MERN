import React from 'react'
import { Outlet } from 'react-router-dom'

const AddProductAdmin = () => {
    return (
        <>
            <div className='w-[80%] h-auto bg-zinc-300 flex justify-center items-center p-8'>
                <div className='w-[90%] flex flex-col gap-2 p-8 bg-white  text-gray-500'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="productTitle">Product title</label>
                        <input type="text" id='productTitle' placeholder='Type Here' className='py-2.5 px-4 border-1 border-zinc-400' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="productTitle">Product Description</label>
                        <input type="text" id='productTitle' placeholder='Type Here' className='py-2.5 px-4 border-1 border-zinc-400' />
                    </div>
                    <div className='w-full flex justify-between items-center text-gray-500 gap-12 my-1'>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="productTitle">Product New Price</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400' />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="productTitle">Product Old Price</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400' />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="productTitle">Stock Size</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400' />
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center text-gray-500 gap-12 my-1'>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="productTitle">Product Related Tags</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400' />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="productTitle">Available Product Sizes</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400' />
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center text-gray-500 gap-12 my-1'>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="productTitle">Product Category</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400' />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor="productTitle">Product Image</label>
                            <input type="file" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400' />
                        </div>
                    </div>

                    <button className='w-[60%] mx-auto py-2.5 bg-green-600 text-white my-6'>Add The Product</button>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default AddProductAdmin
