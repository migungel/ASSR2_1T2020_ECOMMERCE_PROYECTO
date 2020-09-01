import React from 'react';
import {Products} from "./Products";
import {Registrarse} from "./Registrarse";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/registrarse" component={Registrarse}/>
          <Route path="/" component={Products}/>
          <Route path="/products" component={Products}/>
        </Switch>
      </Router>
    )
  }

}
export default App;