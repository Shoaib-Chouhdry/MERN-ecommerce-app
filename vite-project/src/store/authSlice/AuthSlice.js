
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



// const initialState = {
//      isAuthenticated : false,
//      isLoading : false,
//      user : null
// }
const initialState = {
  isAuthenticated: false,
  isLoading: false,  // Set to false initially to prevent unnecessary loading state
  user: null,
  error: false, // ✅ Add error property to track authentication errors
};


// export const registerUser = createAsyncThunk("/auth/register",

//         async (formData) =>{
//           const response = await axios.post("http://localhost:5000/api/auth/register" ,formData,{
//             headers: { "Content-Type": "application/json" },
//             withCredentials:true
//           })
//          return response.data

//         }

// )
export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      return response.data; 
    } catch (error) {
     
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);

export const checkauth = createAsyncThunk("/auth/checkauth",

  async () =>{
    const response = await axios.get("http://localhost:5000/api/auth/checkauth" ,{
      headers: { 
        'Cache-Control':'no-store, no-cache, must-revalidate, proxy-revalidate',
        "Content-Type": "application/json" 
      },
      withCredentials:true
    });
   return response.data

  }

)

export const loginUser = createAsyncThunk("/auth/login",

  async (formData) =>{
    const response = await axios.post("http://localhost:5000/api/auth/signin" ,formData,{
      headers: { "Content-Type": "application/json" },
      withCredentials:true
    })
   return response.data
    
  }

)
export const logoutUser = createAsyncThunk("/auth/logout",

  async () =>{
    const response = await axios.post("http://localhost:5000/api/auth/logout",{},{
      headers: { "Content-Type": "application/json" },
      withCredentials:true
    })
   return response.data
    
  }

)

const authSlice = createSlice({
      name : "auth",
      initialState ,
      reducers : {
        setUser:()=>{

        }
      },
      extraReducers: ( builder ) =>{
        builder.addCase( registerUser.pending,(state)=>{
          state.isLoading=true;
          
        }).addCase(registerUser.fulfilled,(state,action)=>{
          state.isLoading= false;
          state.user = null;
          state.isAuthenticated = false;

        }).addCase(registerUser.rejected,(state,action)=>{
          state.isLoading= false;
          state.user = null;
          state.isAuthenticated = false;
          console.log("Error registering user:", action.payload); // Log the error
          
        }).addCase( loginUser.pending,(state)=>{
           state.isLoading=true

        }).addCase(loginUser.fulfilled,(state,action)=>{
          state.isLoading= false;
          state.user = action.payload.success ? action.payload.user : null ;
          state.isAuthenticated = action.payload.success ? true : false;

        }).addCase(loginUser.rejected,(state,action)=>{
           state.isLoading= false;
           state.isAuthenticated = false;
          state.error = true

        }).addCase( checkauth.pending,(state)=>{
          state.isLoading=true

        }).addCase(checkauth.fulfilled,(state,action)=>{
          console.log(action.payload.user)
          state.isLoading= false;
          state.user = action.payload.success ? action.payload.user : null ;
          state.isAuthenticated = action.payload.success ? true : false;

        }).addCase(checkauth.rejected,(state,action)=>{
          state.isLoading= false;
          state.user = null;
          state.isAuthenticated = false;
        }).addCase(logoutUser.fulfilled,(state,action)=>{
          state.isLoading= false;
          state.user = null;
          state.isAuthenticated = false;
        })
      }

})

export const  {setUser} = authSlice.actions
export default authSlice.reducer
