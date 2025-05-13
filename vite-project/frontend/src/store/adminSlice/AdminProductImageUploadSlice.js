import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const imageUpload = createAsyncThunk(
    "/products/imageupload",
    async (formData) => {
        
        console.log(formData)
        const result = await axios.post("http://localhost:5000/api/admin/product/uploadimage", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            
            },
            withCredentials: true,
        });
        return result?.data;
    }
);




const imageUploadSlice = createSlice({
    name: "imageUpload",
    initialState: {
        imageUrl: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearImage: (state) => {
            state.imageUrl = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(imageUpload.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(imageUpload.fulfilled, (state, action) => {
                state.loading = false;
                state.imageUrl = action.payload;
            })
            .addCase(imageUpload.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
  });
  
  export const { clearImage } = imageUploadSlice.actions;
  export default imageUploadSlice.reducer;