import axios from 'axios';
import React, { useState } from 'react'
import { AppContextConsumer } from '../Context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const { URL } = AppContextConsumer();
  const notify = () => toast.success("User Account has been Created");
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${URL}/auth/signup`, input, { headers: { "Content-Type": "application/json" }, withCredentials: true })

      if (res.data.success) {
        notify();
        navigate("/login")

      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="signup_outer_container w-full h-auto bg-[#fce3fe] flex justify-center items-center py-16">
        <form className="signup_inner_container container w-[378px] max-sm:w-[80%] bg-white flex flex-col items-center justify-start  rounded-md py-10 gap-3" onSubmit={handleSubmitForm}>
          <h1 className='text-xl font-semibold'>Sign Up</h1>
          <input type="text" placeholder='Enter your Name' className='w-[95%] mx-auto py-2 px-4  border border-zinc-600 outline-none rounded-md' name="username" onChange={handleChangeInput} />
          <input type="text" placeholder='Enter your Email Address' className='w-[95%] mx-auto py-2 px-4  border border-zinc-600 outline-none rounded-md' name="email" onChange={handleChangeInput} />
          <input type="text" placeholder='Enter your Password' className='w-[95%] mx-auto py-2 px-4  border border-zinc-600 outline-none rounded-md' name="password" onChange={handleChangeInput} />
          <button className='text-center w-[95%] mx-auto py-2 bg-red-600 text-white' type='submit'>Continue</button>
          <p className='py-2 text-center'>By continuing I agree to the terms of use & privacy policy</p>
        </form>
      </div>
    </>
  )
}

export default Signup