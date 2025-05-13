import React from 'react'
import { Button } from '../ui/button'
import { AlignJustify, ArrowRightFromLine } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/AuthSlice/AuthSlice'

const AdminHeader = ({setOpen}) => {
      const dispatch=useDispatch()
    //   async function handleLogout() {
    //     try {
    //         const response = await dispatch(logoutUser()).unwrap(); // Use unwrap to get resolved/rejected data
    //         console.log("Response from logoutUser:", response);
    //         if (response.success) {
    //             console.log("Logout successful");
    //             window.location.href = "/auth/login"; // Redirect to login after logout
    //         } else {
    //             console.log("Logout failed:", response.message);
    //         }
    //     } catch (error) {
    //         console.log("Error logging out:", error);
    //     }
    // }
    async function handleLogout() {
      try {
          console.log("Logging out...");
          await dispatch(logoutUser()).unwrap(); 
          console.log("Logout successful");
          window.location.href = "/auth/login"; 
      } catch (error) {
          console.log("Error logging out:", error);
      }
    }
  
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Button onClick={()=>setOpen(true)} className="lg:hidden sm:block">
      <AlignJustify />
       <span className="sr-only"> Toggle Menu</span>
      </Button>
      <div className='flex flex-1 justify-end  '>
       <Button className="bg-black text-white shadow inline-flex gap-2 font-medium text-sm py-2 px-4 rounded-md"
        onClick={handleLogout}
       >
       <ArrowRightFromLine />
       Logout
       </Button>
      </div>
    </div>
  )
}

export default AdminHeader
