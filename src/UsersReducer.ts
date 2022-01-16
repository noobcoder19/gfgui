
interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IStatusizedUser {
    users: IUser[];
    loading: boolean;
}

interface IUsersAction {
    payload: IUser[];
    type: string;
}

export const UsersReducer = (state: IStatusizedUser, action: IUsersAction): IStatusizedUser => {
    switch(action.type) {
        case "started": return {...state, loading: true};
        case "completed": return {...state, users: action.payload, loading: false};
    }
    return {loading: true, users:[]}
}