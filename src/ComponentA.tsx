import { useHistory } from "react-router"

export default function ComponentA(){
    const history=useHistory();
    return (
    <>
     <div> component a</div>
     <button onClick={()=> history.goBack()}>go back</button>
     </>
    );

}