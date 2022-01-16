import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import {Redirect, Route} from 'react-router';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import MainClass from './MainClass';
import UsersClass from './UsersClass';
import Hooks from './Hooks';
import FuncProps from './FuncProps';
import ComponenentDidUpdate from './ComponentdidUpdate';
import ReduxBasics from './ReduxBasics';
import WebsiteReducerUI from './WebsiteReducerUI';
import UsersSlice from './UsersSlice';
import SliceUI from './SliceUI';
import HotelsUI from './HotelsUI';
import HooksUI from './HooksUI';
import Login from './Login';
import SignUp from './SignUp';
import MaterialUI from './MaterialUI';
import Profile from './Profile';
function App() {
  return (
   <switch>
     <Route exact path="/a" component={ComponentA} />
     <Route exact path="/b/:name" component={ComponentB} />
     <Route exact path ="/c" component={ComponentC} />
     <Route exact path ="/mainclass" component={MainClass} />
      <Route exact path ="/UsersClass" component={UsersClass} />
    <Route exact path ="/hooks" component={Hooks} />
    <Route exact path ="/funcprops" component={FuncProps} />
    <Route exact path ="/componentdidupdate" component={ComponenentDidUpdate} />
    <Route exact path ="/reduxbasics" component={ReduxBasics} />
    <Route exact path ="/websiteui" component={WebsiteReducerUI} />
    <Route exact path ="/usersslice" component={SliceUI} />
    <Route exact path ="/hotelsui" component={HotelsUI} />
    <Route exact path="/hooksui" component={HooksUI} />
    <Route exact path="/Profile" component={Profile} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/SignUp" component={SignUp} />
    <Route exact path="/materialUI" component={MaterialUI} />
    <Route exact path="/" render={()=> <Redirect to="/hotelsui"/> } />
 
   </switch>
  );
}

export default App;
