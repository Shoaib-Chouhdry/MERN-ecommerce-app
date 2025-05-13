// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import {Link, useNavigate} from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { ToastContainer, toast } from "react-toastify";
// import { loginUser } from '@/store/AuthSlice/AuthSlice'; 

// const SignUpForm = () => {


//       const { register,handleSubmit,watch,formState:{ errors,isSubmitting},setValue}= useForm(
          
//       );
//       const dispatch = useDispatch();
//       const Navigate =useNavigate();

//    const onSubmit = async(data,event) => {
//     event?.preventDefault();
//       try {
//             const response = await dispatch(loginUser(data)).unwrap(); 
//              console.log(response)
//             if (response.success) {
//               toast.success("Login Successful", { position: "top-right" });
//             } else {
//               toast.error("User doesnot exist with this email", { position: "top-right" });
              
//               return;
//             }
//       } catch (error) {
//             toast.error(error.message || "Login failed", { position: "top-right" });
           
//       }
                

//    }
//   return (
   
     
//         <div className=" bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm relative w-full flex flex-col items-center justify-center min-h-screen">
//           <h1 className="text-white text-4xl font-bold text-center mb-6">Sign In To Your Account</h1>
      
//          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
         
  
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
//                 type='password'
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
//               {isSubmitting ? "...Loading" :"Sign In"}  
//             </button>
//             <div className='flex items-center justify-center gap-2 text-white'>
//               <span>Donot have account ?</span><span><Link to="/auth/register"className='hover:text-blue-500 '>Register</Link></span>  
//             </div>
          
//         </form>
//         <ToastContainer/>
//         </div>
         
    
//   );
// };

// export default SignUpForm;

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
    import { ToastContainer, toast } from 'react-toastify';
    import { loginUser } from '@/store/AuthSlice/AuthSlice';
    
    const SignUpForm = () => {
      const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      const onSubmit = async (data, event) => {
        event?.preventDefault();
        try {
          const response = await dispatch(loginUser(data)).unwrap();
          if (response.success) {
            toast.success('Login Successful', { position: 'top-right' });
             // Redirect after successful login
          } else {
            toast.error('User does not exist with this email', { position: 'top-right' });
          }
        } catch (error) {
          toast.error(error.message || 'Login failed', { position: 'top-right' });
        }
      };
    
      return (
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <h1 className="text-white text-3xl font-extrabold text-center mb-6">Sign In</h1>
    
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="relative">
              <input
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email' },
                })}
                className="w-full bg-transparent border-b-2 border-gray-500 text-white text-sm p-2 focus:outline-none focus:border-blue-500"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>
    
            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' },
                })}
                className="w-full bg-transparent border-b-2 border-gray-500 text-white text-sm p-2 focus:outline-none focus:border-blue-500"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>
    
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 rounded-lg bg-[#111827] text-white py-2 text-lg font-semibold hover:bg-[#010203] transition duration-300"
            >
              {isSubmitting ? 'Loading...' : 'Sign In'}
            </button>
    
            {/* Register Link */}
            <p className="text-center text-gray-400 text-sm mt-4">
              Don't have an account?{' '}
              <Link to="/auth/register" className="text-white hover:underline">
                Register
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      );
    };
    
    export default SignUpForm;
    
