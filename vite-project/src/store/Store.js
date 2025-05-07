import  {configureStore} from  "@reduxjs/toolkit";
import authReducer from "./authSlice/AuthSlice"
import adminProductSlice from './adminSlice/AdminProductSlice.js'
import imageUploadReducer from "./adminSlice/AdminProductImageUploadSlice";
import ShoppingProductsSlice from "./shopSlice/ShopProductSlice.js"
import shoppingCardSlice from "./shopSlice/ShopCardSlice.js"
import orderSlice from "./shopSlice/OrderSlice.js"

const store = configureStore({
   reducer :{
            auth :authReducer,
            adminProducts :adminProductSlice,
            imageupload:imageUploadReducer,
            shopProducts:ShoppingProductsSlice,
            shoppingCard: shoppingCardSlice,
            orderSlice: orderSlice,
   } 
})
export default store;