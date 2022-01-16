import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export const UsersSlice = createSlice({
    name: 'UsersSlice',
    initialState: [],
    reducers: {
        completed(state: IUser[], action: PayloadAction<IUser[]>) {
            state= action.payload;
        },
        started(state: IUser[]) {
            state = []
        }
    },
});

export const {completed, started} = UsersSlice.actions;

export default UsersSlice.reducer;