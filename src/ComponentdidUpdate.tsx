import { useEffect, useState } from "react";

export default function ComponenentDidUpdate(){
    const [todoId, setTodoId] = useState<number>(1);
    const [title,setTitle] = useState<string>("");
    useEffect(() => {
        async function api() {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${todoId}`
            );
            const json = await response.json();
            setTitle(json.title);
        }
        api();
    }, [todoId]);

    return(
        <>
        <input
            type="text"
            onChange={(e) => setTodoId(parseInt(e.target.value))}
            />

        <label>{title}</label>
        </>
    );
}