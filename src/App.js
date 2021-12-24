import React from "react";

import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Footer from "./Collections/Footer";
import Heder from "./Collections/Heder";
import Main from "./Collections/Main";
import Users from "./Collections/Users";


function App() {
  return (
    <div>
  
  <BrowserRouter>{/* BroswserRouting is for Routeing Url Segments */}
    <Switch>
        <Route  exact path="/" component={Main} ></Route>
        <Route exact path="/Footer" component={Footer} ></Route>
        <Route path="/Heder" component={Heder} ></Route>
        <Route path="/Users" component={Users} ></Route>
       
        </Switch>
      </BrowserRouter>
</div>
  
  );
}

export default App;
