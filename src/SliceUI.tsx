import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { completed, IUser, started } from "./UsersSlice";
export default function SliceUI() {
    const dispatch = useDispatch();
    // const users: IUser[] = useSelector((state: AppState) => state.UsersSlice);
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            dispatch(completed(json.data));
        }
        dispatch(started());
        api();
    },[dispatch]);

    return <div>Redux Basics</div>;
}