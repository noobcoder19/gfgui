import { combineReducers, createStore } from "redux";
import { UsersReducer } from "./UsersReducer";
import {devToolsEnhancer} from "redux-devtools-extension";
import { WebsiteReducer } from "./WebsiteReducer";
import UsersSlice from "./UsersSlice";
import HotelsSlice from "./HotelsSlice";

const rootReducer = combineReducers({
    UsersReducer: UsersReducer,
    WebsiteReducer: WebsiteReducer,
    UsersSlice: UsersSlice,
    HotelsSlice: HotelsSlice
})

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = createStore(rootReducer,{},devToolsEnhancer({}));