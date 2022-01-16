import { createContext, useRef, useState } from "react";
import Context from "./Context";
import FuncProps from "./FuncProps";


export const tokenContext = createContext<string>("");
export default function Hooks() {
    const [name, setName] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <label> {`hello ${name} `}</label>
            <FuncProps init ={5} />
            <input type="text" ref={inputRef} onChange={e=> alert(inputRef.current?.value)} />
            <tokenContext.Provider value={name}>
                <Context />
            </tokenContext.Provider>
        </>
    );
}