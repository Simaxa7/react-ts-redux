import React from "react";
import UserList from "./UserList";
import MyInput from "./MyInput";

const App = () => (
    <div className="App">
        <h1>React ts redux</h1>
        <hr/>
        <br/>
        <MyInput/>
        <hr/>
        <br/>

        <UserList/>
    </div>
  );

App.displayName = "App";

export default App;
