import { useEffect} from 'react'

import AuthLayout from './components/Auth/AuthLayout'
import { Route, Routes } from 'react-router-dom'
import AuthLogin from './pages/Auth/Login'
import AuthRegister from './pages/Auth/Register'
import AdminLayout from './components/AdminView/AdminLayout'
import AdminProduct from './pages/AdminPageView/AdminProduct'
import AdminFeatures from './pages/AdminPageView/AdminFeatures'
import AdminOrder from './pages/AdminPageView/AdminOrder'
import AdminDashboard from './pages/AdminPageView/AdminDashboard'
import ShoppingLayout from './components/shoppingView/ShoppingLayout'
import NotFound from './pages/NotFound/NotFound'
import ShoppingHome from './pages/shoppingPageView/ShoppingHome'
import ShoppingAccount from './pages/shoppingPageView/ShoppingAccount'
import ShoppingList from './pages/shoppingPageView/ShoppingList'
import ShoppingCheckout from './pages/shoppingPageView/ShoppingCheckout'
import CheckAuth from './components/Common/CheckAuth'
import UnAuthPage from './pages/UnAuthPage/UnAuthPage'
import { useDispatch, useSelector } from 'react-redux'
import { checkauth } from './store/AuthSlice/AuthSlice'
import Home from './pages/homePageView/Home'
import CartPage from './components/shoppingView/ProductCardDetail'
import Success from './components/shoppingView/Success'
import Cancel from './components/shoppingView/Cancel'



function App() {
     const {isAuthenticated,user,isLoading} =useSelector(state=>state.auth)
     const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(checkauth())
    },[dispatch])

    // if(isLoading) return <div>Loading...</div>

return (

     <div className='flex flex-col overflow-hidden bg-white '>
       {/* <h1> Header Component </h1> */}
       <Routes>
           <Route path='/' element={<Home/>}  />
          <Route path='/auth' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
               <AuthLayout/>
            </CheckAuth>
          }>
            <Route path='login' element={<AuthLogin/>}/>
            <Route path='register' element={<AuthRegister/>}/>
          </Route>
          <Route path='/admin' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
            </CheckAuth>
          }>
             <Route path='product' element={<AdminProduct/>}/>
             <Route path='features' element={<AdminFeatures/> }/>
             <Route path='order' element={<AdminOrder/> }/>
             <Route path='dashboard' element={<AdminDashboard/> }/>
          </Route>
          <Route path='/shop' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout/>
            </CheckAuth>
          }> 
             <Route path='home' element={<ShoppingHome/>}/>
             <Route path='account' element={<ShoppingAccount/>}/>
             <Route path='listing' element={<ShoppingList/>}/>
             <Route path='checkout' element={<ShoppingCheckout/>}/>
             <Route path="cart" element={<CartPage />}/>
             <Route path='success' element={<Success/>}/>
             <Route path= "cancel" element={<Cancel/>}/>
             
          </Route>
          
          <Route path='/UnAuthPage' element={<UnAuthPage/>}/>
          <Route path="*" element={<NotFound/>}/>
       </Routes>
     </div>
)
}

export default App
