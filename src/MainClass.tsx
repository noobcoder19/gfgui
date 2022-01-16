import React from "react"
import Add from "./Add"

export default class MainClass extends React.Component{
    render(){
        return(
            <>
                <div> main class</div>
                <Add a={10} b={15} />
                
                
            </>
        );
    }
}