import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function ReduxBasics() {
    const dispatch = useDispatch();
    // const statusizedUser: IStatusizedUser = useSelector((state: AppState) => state.UsersReducer);
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            dispatch({type: "completed", payload:json.data});
        }
        dispatch({type: "started"});
        api();
    },[dispatch])

    return <div>Redux Basics</div>
}