import { useState } from "react";

export default function SimpleJest() {
    const [name,setName] = useState("");
    return(
        <>
            <input type="text" data-testid="input" onChange={(e) => setName(e.target.value)} />
            <label data-testid="output">{`hello ${name}`}</label> 
        </>
    );
}