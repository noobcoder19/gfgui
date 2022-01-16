import { useState} from "react";
interface Iprops {
    init: number;
}

export default function FuncProps(props: Iprops) {
    const [num, setNum] = useState<number>(props.init);
    return (
        <>
            <button onClick={e => setNum(num + 1)}>increment by 1</button>
            <label>{num}</label>;
        </>
    );
}