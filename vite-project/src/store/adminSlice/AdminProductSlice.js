import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    isLoading:false,
    productList :[]
}
const imageUploadInitialState ={
  isLoading:false,
  imageUpload :[]

}
export const addNewProduct = createAsyncThunk(
      "/products/addnewproduct",
          async (formData)=>{
            for (let [key, value] of formData.entries()) {
              console.log(`${key}:`, value);
            }
            try {
              const result = await axios.post("http://localhost:5000/api/admin/product/add", formData, {
                headers: {
                  
                  "Content-Type": "application/json"
                },
                withCredentials: true,
              });
              return result?.data;
            } catch (error) {
              console.error("Error adding product:", error);
            }
          }
);

// export const imageUpload = createAsyncThunk(
//   "/products/imageupload",
//       async (formData)=>{
//       const result = await axios.post("http://localhost:5000/api/admin/product/imageupload",formData,{
//         headers: {
//           "Content-Type": "multipart/form-data", 
//         },
//         withCredentials: true, 
//       })
//       return result?.data
//   }
// );

export const fetchAllProduct = createAsyncThunk(
    "/products/fetchproduct",
        async ()=>{
        const result = await axios.get("http://localhost:5000/api/admin/product/get")
        return result?.data
    }
);
export const editProduct = createAsyncThunk(
    "/products/editproduct",
        async ({id,formData})=>{
        const result = await axios.put(`http://localhost:5000/api/admin/product/edit/${id}`,formData,{
            headers: {
                // "Content-Type": "multipart/form-data", 
                "Content-Type": "application/json"
              },
            withCredentials: true, 
        })
        return result?.data
    }
);
export const deleteProduct = createAsyncThunk(
    "/products/deleteproduct",
        async (id)=>{
        const result = await axios.delete(`http://localhost:5000/api/admin/product/delete/${id}`,{},{
            // headers: {
                // "Content-Type": "multipart/form-data", 
                // "Content-Type": "application/json"
              // },
            withCredentials: true, 
        })
        return result?.data
    }
);


 const AdminProductsSlice= createSlice({
    name: 'adminProducts',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=> {
       builder.addCase( fetchAllProduct.pending,(state)=>{
                 state.isLoading=true
               }).addCase(fetchAllProduct.fulfilled,(state,action)=>{
                 state.isLoading= false;
                 state.productList = action.payload.data;
                 
               }).addCase(fetchAllProduct.rejected,(state,action)=>{
                 state.isLoading= false;
                 state.productList = null;
                 
       })
    }
})
export default AdminProductsSlice.reducer;


