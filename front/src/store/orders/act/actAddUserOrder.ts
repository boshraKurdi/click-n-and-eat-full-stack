import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { RootState } from "@store/index";
import { TOrder } from "@customtypes/order";

type TResponse = {};

const actAddUserOrders = createAsyncThunk(
    "orders/actAddUserOrders",
    async (formData: TOrder, thunkAPI) => {
        const { rejectWithValue, getState, signal } = thunkAPI;
        const auth = getState() as RootState;

        try {
            const res = await axios.post<TResponse>('/order/store', JSON.stringify(formData), {
                signal,
                headers: {
                    Authorization: 'Bearer' + auth.auth.data?.authorisation.token,
                    'Content-Type': 'application/json'
                }
            },
            );

            return res.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actAddUserOrders;
