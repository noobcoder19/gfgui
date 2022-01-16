import React from "react";

interface IUser {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface IState {
    users: IUser[];
    isLoading: boolean;
}

export default class UsersClass extends React.Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isLoading: true,
            users: [],
        };
    }

    public async componentDidMount(){
        const response = await fetch("https://reqres.in/api/users");
        const json = await response.json();
        this.setState({ users: json.data, isLoading: false});
    }

    public render(): JSX.Element {
        if(this.state.isLoading) {
            return <div>loading</div>;
        }
        return (
            <>
            <img src={this.state.users[0].avatar} alt={this.state.users[0].first_name} />
            <div> {this.state.users[0].email}</div>
            </>
        );
    }
    
}