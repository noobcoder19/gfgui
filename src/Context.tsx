import { useContext } from "react";
import { tokenContext } from "./Hooks";

export default function Context(){
        const token = useContext(tokenContext);
        return <div> context example {token}</div>
}