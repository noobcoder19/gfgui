import React from "react";

interface IAddProps {
    a: number;
    b: number;
}

export default class Add extends React.Component<IAddProps>{
    render(){
        return <div>{this.props.a+this.props.b}</div>
    }
}