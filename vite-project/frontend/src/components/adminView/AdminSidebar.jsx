import React, { Fragment } from 'react'
import { SquareArrowOutUpRight , X} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { LayoutDashboard,ShoppingBasket,WindArrowDown } from 'lucide-react'

const adminSidebarMenuItem =[
    {
      id : 'dashboard',
      label : 'Dashboard',
      path: '/admin/dashboard',
      icon: <LayoutDashboard/>,
    },
    {
        id : 'products',
        label : 'Products',
        path: '/admin/product',
        icon : <ShoppingBasket/> ,
    },
    {
        id : 'orders',
        label : 'Orders',
        path: '/admin/order',
        icon : <WindArrowDown/> ,
    }
];

function MenuItems ({setOpen}){
  const navigate = useNavigate();
  return <nav className='mt-8 flex flex-col gap-2'>
       {adminSidebarMenuItem.map((menuItem)=>(
        <div
          key={menuItem.id}
          onClick={()=>{
            navigate(menuItem.path)
            setOpen ? setOpen(false) : null;
          }}
          className='flex text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:cursor-pointer'
        >
           {menuItem.icon}
           <span>{menuItem.label}</span>
           
        </div>))}
  </nav>

}

const AdminSidebar = ({open,setOpen}) => {

   const navigate = useNavigate()
  return (
    <Fragment>
      <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        open ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
      >
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <X size={20} />
      </button>

    
      <div className="flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex items-center gap-2 border-b pb-4">
          <SquareArrowOutUpRight size={30} />
          <h1 className="text-xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems setOpen={setOpen}/>
      </div>
    </div>
      <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>
        <div onClick={()=>navigate('/admin/dashboard')} className='flex cursor-pointer items-center gap-2'>
          <SquareArrowOutUpRight size={30}/>
          <h1 className='text-xl font-extrabold'>Admin Panel</h1>
        </div>
        <MenuItems/>
      </aside>
    </Fragment>
         
  )
}

export default AdminSidebar
