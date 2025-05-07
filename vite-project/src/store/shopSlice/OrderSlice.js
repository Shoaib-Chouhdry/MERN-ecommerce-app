import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/card";

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/place_order`, orderData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userOrders = createAsyncThunk(
  "orders/userOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}`, {
        withCredentials: true,
      });
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const allOrders = createAsyncThunk(
  "orders/allOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/all_orders`, {
        withCredentials: true,
      });
      return response.data.orders;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateStatus = createAsyncThunk(
  "orders/updateStatus",
  async ({ orderId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${baseUrl}//update_status/${orderId}`,
        { status },
        {
          withCredentials: true,
        }
      );
      return { orderId, status };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  orders: [],
  error: null,
  loading: false,
  url: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Place Order
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.url = action.payload.url;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //User Orders
      .addCase(userOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(userOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(userOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //All Orders
      .addCase(allOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      //Update Order Status
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.map((order) =>
          order._id === action.payload.orderId
            ? { ...order, status: action.payload.status }
            : order
        );
      });
  },
});

export default orderSlice.reducer;