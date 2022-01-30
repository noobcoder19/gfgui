import { useEffect, useState } from "react";
import {apiInvoke} from "./ApiInvoke";
export default function SimpleJestMock() {
    const [name, setName] = useState("");
    useEffect(() => {
        async function api() {
            const apiName = await apiInvoke();
            setName(apiName);
        }
        api();
    },[]);
    if(name)
    return (<label data-testid="output">{name}</label>)
    else
    return null;
}