import { useState } from "react";

export default function SimpleJest() {
    const [name,setName] = useState("");
    return(
        <>
            <input type="text" id="input" onChange={(e) => setName(e.target.value)} />
            <label id="output">{`hello ${name}`}</label> 
        </>
    );
}