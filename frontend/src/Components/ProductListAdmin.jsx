import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';

const ProductListAdmin = () => {
    const [productListArray, setProductListArray] = useState([]);
    let i=1;

    const getTheProductListData=async()=>{
        try {
            const res = await axios.get(`${URL}/product/getAllProduct`);

            if(res.data.success){
                setProductListArray([...res.data.allProduct]);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getTheProductListData();
    }, [])
  return (
    <>
      <div className="productList_container flex flex-col items-center justify-start gap-3 mb-12">
        <h1 className='text-5xl'>Analyze the Product</h1>
        <div className='w-[30%] bg-black h-2 text-black rounded-full mb-12'/>
          {
            productListArray.map((currElem)=>{
              return(
                <div key={currElem._id} className='w-[90%] mx-auto flex justify-between items-center p-2 border-1 border-zinc-300 shadow-md rounded-md text-lg gap-8'>
                  <p >{i++}</p>
                  <p className={`w-full text-start ${currElem.productStock < 50?"text-red-600":""}`}>{currElem.productTitle}</p>
                  <p className='flex justify-center items-center gap-4'>{currElem.productStock} <button className='py-2.5 px-4 bg-green-600 text-white rounded-xl text-xl'>Analyze</button></p> 
                </div>
              )
            })
          }
      </div>
      <Outlet />
    </>
  )
}

export default ProductListAdmin
