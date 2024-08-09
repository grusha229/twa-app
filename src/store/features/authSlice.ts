import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    initDataRaw: string;
  }

const initialState: IAuthState = {
    initDataRaw: '',
}

export const AuthSlice = createSlice({
    name: "launchParams",
    initialState,
    reducers: {
        setInitDataRaw: (state, action) => {
            state.initDataRaw = action.payload
        },
    }
})

export const { setInitDataRaw } = AuthSlice.actions

export default AuthSlice.reducer