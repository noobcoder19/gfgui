import { Redirect, Route } from 'react-router';
import './App.css';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponenentDidUpdate from './ComponentdidUpdate';
import FuncProps from './FuncProps';
import Hooks from './Hooks';
import HooksUI from './HooksUI';
import HotelsUI from './HotelsUI';
import Login from './Login';
import MainClass from './MainClass';
import MaterialUI from './MaterialUI';
import Profile from './Profile';
import ReduxBasics from './ReduxBasics';
import SignUp from './SignUp';
import SliceUI from './SliceUI';
import UsersClass from './UsersClass';
import WebsiteReducerUI from './WebsiteReducerUI';
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
