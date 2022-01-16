import { useHistory } from "react-router";

export default function ComponentC(){
    const history = useHistory();
    return(
        <>
            <div> Component c</div>
            <button onClick={()=> history.push("/a")}>go to a</button>
        </>

    );
}