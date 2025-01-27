import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { RootState } from "@store/index";
import { TOrder } from "@customtypes/order";
import Cookie from 'cookie-universal';

type TResponse = [];
const cookie = Cookie()

const actGetUserOrders = createAsyncThunk(
  "orders/actGetUserOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const auth = getState() as RootState;

    try {
      const res = await axios.get<TResponse>(
        `/order/${auth.auth.data?.user.id}/show`,
        {
          signal,
          headers: {
            Authorization: 'Bearer' + cookie.get('token'),
            'Content-Type': 'application/json'

          }
        }
      );

      // const orders = res.data.map((el) => ({
      // id: el.id,
      // subtotal: el.subtotal,
      // items: el.items,
      // }));

      return res;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetUserOrders;
