import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    isLoading:false,
    cardItems:[],
}


export const addToCard = createAsyncThunk(
           "/card/addToCard",
               async ({ userId, productId,quantity })=>{
               const response = await axios.post("http://localhost:5000/api/shop/card/add",{
                userId,productId,quantity,
               })
               return response?.data
              }
            );
         
export const fetchCardItems = createAsyncThunk(
                "/card/fetchCardItems",
                    async ( userId)=>{
                    const response = await axios.get(`http://localhost:5000/api/shop/card/get/${userId}`)
                    return response?.data
                   }
                 );

export const deleteCardItem = createAsyncThunk(
                    "/card/deleteCardItem",
                        async ({ userId, productId })=>{
                        const response = await axios.delete(`http://localhost:5000/api/shop/card/${userId}/${productId}`)
                        return response?.data
                       }
                     );

export const updateCardQuantity = createAsyncThunk(
                        "/card/updateCardQuantity",
                            async ({ userId, productId,quantity })=>{
                            const response = await axios.put(`http://localhost:5000/api/shop/card/add/update`,{
                             userId,productId,quantity,
                            })
                            return response?.data
                           }
                         );


const shoppingCardSlice= createSlice({
    name: 'shoppingCard',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=> {
       builder.addCase( addToCard.pending,(state)=>{
                 state.isLoading=true
               }).addCase(addToCard.fulfilled,(state,action)=>{
                 state.isLoading= false;
                 state.cardItems = action.payload.data;
               }).addCase(addToCard.rejected,(state,action)=>{
                 state.isLoading= false;
                 state.cardItems = [];

              }).addCase(fetchCardItems.pending,(state,action)=>{
                state.isLoading= true;
                state.cardItems = [];
              }).addCase(fetchCardItems.fulfilled,(state,action)=>{
                state.isLoading= false;
                state.cardItems = action.payload.data;
              }).addCase(fetchCardItems.rejected,(state,action)=>{
                state.isLoading= false;
                state.cardItems = [];
                
              }).addCase(deleteCardItem.pending,(state,action)=>{
                state.isLoading= true;
                state.cardItems = [];
              }).addCase(deleteCardItem.fulfilled,(state,action)=>{
                state.isLoading= false;
                state.cardItems = action.payload.data;
              }).addCase(deleteCardItem.rejected,(state,action)=>{
                state.isLoading= false;
                state.cardItems = [];
                
              }).addCase(updateCardQuantity.pending,(state,action)=>{
                state.isLoading= true;
                state.cardItems = [];
              }).addCase(updateCardQuantity.fulfilled,(state,action)=>{
                state.isLoading= false;
                state.cardItems = action.payload.data;
              }).addCase(updateCardQuantity.rejected,(state,action)=>{
                state.isLoading= false;
                state.cardItems = [];
                
              })
    }
})
export default shoppingCardSlice.reducer;