// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import {Link, useNavigate} from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { registerUser } from '@/store/AuthSlice/AuthSlice';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";




// const SignUpForm = () => {


//       const { register,handleSubmit,watch,formState:{ errors,isSubmitting},}= useForm();
//       const dispatch = useDispatch()
//       const Navigate =useNavigate()
      
  
//   const onSubmit = async (data) => {
//     try {
//       const response = await dispatch(registerUser(data)).unwrap();
//       console.log(response);
  
//       if (response.success) {
//         toast.success("Registration Successful", { position: "top-right" });
  
//         setTimeout(() => {
//           Navigate("/auth/login");
//         }, 5000);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error(error || "Email already exists", { position: "top-right" });
//     }
//   };
  
  
  
  
  

//   return (
//     // mx-auto w-full max-w-md space-y-6
     
//         <div className=" bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm relative w-full flex flex-col items-center justify-center min-h-screen">
//           <h1 className="text-white text-4xl font-bold text-center mb-6">Sign up for an account</h1>
      
//         <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
         
//           <div className=" text-white relative py-4">
          
//               <input
//                 id="name"
//                 {...register('name',
//                   { required: "Name is required", minLength:{value:3,message:"Min Length Atleast 3"}, maxLength : 20})}
//                 className="block bg-transparent w-full py-2.3 px-0 text-sm  border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
//                 placeholder=''
//               />
//                {errors.name && <p className='text-red-500 text-sm '>{errors.name.message}</p>}
//               <label htmlFor="name" className="absolute text-sm  bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your Name</label>
//           </div>
//             <div className='relative py-4 text-white'>
              
//               <input
//                  id="email"
//                  {...register("email", {
//                   required: "Email is required",
//                   pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" },
//                 })}
//                 className="block bg-transparent w-full py-2.3 px-0 text-sm  border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
//                 placeholder=""
//               />
//               {errors.email && <p className='text-red-500 text-sm '>{errors.email.message}</p>}
//               <label htmlFor="email" className="absolute text-sm  bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
//             </div>
//             <div className='relative py-4 text-white'>
              
//               <input
//                 id="password"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: { value: 6, message: "Password must be at least 6 characters" },
//                 })}
//                 className="block bg-transparent w-full py-2.3 px-0 text-sm  border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
//                 placeholder=""
//               />
//               {errors.password && <p className='text-red-500 text-sm '>{errors.password.message}</p>}
//               <label htmlFor="password" className="absolute text-sm  bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//             </div>
          

          
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
//             >
//               {isSubmitting ? "...Loading" :"Sign Up"}  
              
//             </button>
          
          
//           <div className='flex items-center justify-center text-white'>
//               <span>Already have account ? <Link to="/auth/login"className='hover:text-blue-500 '>Login</Link></span>  
//           </div>
//         </form>
//         <ToastContainer/>
//         </div>
         
    
//   );
// };

// export default SignUpForm;








  //  const onSubmit = async(data) => {
    
  //          dispatch(registerUser(data)).then((data)=>{
  //           if(data?.payload?.success) {
  //             toast.success("Registration Successful",{ position:"top-right" });
  //             Navigate('/auth/login');
  //             alert("successful")
              
  //           }
  //           console.log(data)
  //     });           

  //  }
  // const onSubmit = async (data,e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await dispatch(registerUser(data)).unwrap(); 
  //      console.log(response)
  //     if (response.success) {
  //       toast.success("Registration Successful", { position: "top-right" });
  //         setTimeout(() => {
  //         Navigate("/auth/login");
  //       },5000); 
  //     } else {
  //       toast.error("Email already Exist", { position: "top-right" });
  //     }
  //   } catch (error) {
  //     toast.error(error.message || "Registration failed", { position: "top-right" });
  //   }
  // };
// const response=await fetch("http://localhost:5173/api/auth/signup",{
    //   method:'POST',
    //   headers:{
    //     'Content-Type':"application/json",
    //   },
    //   body:JSON.stringify(data),
    //   credentials: "include",


    import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/AuthSlice/AuthSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(registerUser(data)).unwrap();
      if (response.success) {
        toast.success('Registration Successful', { position: 'top-right' });
        setTimeout(() => navigate('/auth/login'), 3000);
      }
    } catch (error) {
      toast.error(error || 'Email already exists', { position: 'top-right' });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <h1 className="text-white text-3xl font-extrabold text-center mb-6">Create an Account</h1>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="relative">
            <input
              {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Minimum 3 characters' } })}
              className="w-full bg-transparent border-b-2 border-gray-500 text-white p-2 focus:outline-none focus:border-blue-500"
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email' },
              })}
              className="w-full bg-transparent border-b-2 border-gray-500 text-white p-2 focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'At least 6 characters' } })}
              className="w-full bg-transparent border-b-2 border-gray-500 text-white p-2 focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 rounded-lg bg-[#111827] text-white py-2 text-lg font-semibold hover:bg-[#010203] transition duration-300"
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-white hover:underline">
              Login
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUpForm;
