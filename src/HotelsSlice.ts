import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotel{
    name: string;
    cuisines: string;
    featured_image: string;
    id: string;
}

const HotelsSlice = createSlice({
    name: "HotelSlice",
    initialState: new Array<IHotel>(),
    reducers: {
        completed(_state: IHotel[], action: PayloadAction<IHotel[]>): IHotel[] {
            return action.payload;
        },
        started(_state: IHotel[]): IHotel[] {
            return [];
        }
    }
});

export const {completed, started} = HotelsSlice.actions;
export default HotelsSlice.reducer;

