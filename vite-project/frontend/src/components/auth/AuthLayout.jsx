// import { Outlet } from "react-router-dom";

// function AuthLayout (){
//   return(
//     <div className="flex min-h-screen w-full">
//       <div className=" hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
//         <div className="max-w-md space-y-6 text-center text-primary-foreground">
//             <h2 className="text-4xl font-extrabold tracking-tight text-white">
//               Welcome To ecom
//             </h2>
//         </div>
//       </div>
//       {/* px-4 py-12 sm:px-6 lg:px-8 */}
//        <div className="flex flex-1 items-center justify-center bg-background h-screen">
//          <Outlet/>
//        </div>
//     </div>
//   )
// }
// export default AuthLayout;
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-900">
      {/* Main Container */}
      <div className="flex w-full max-w-4xl h-[75vh] bg-gray-800 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md border border-gray-700">
        
        {/* Left Side - Welcome Message */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-gray-900 to-black w-1/2 p-10">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">Welcome to Ecom</h2>
            <p className="text-gray-400 text-lg">Your one-stop shop for all your needs.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-900 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

