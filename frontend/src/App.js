import React from 'react';
import {Products} from "./Products";
import {Home} from "./Home";
import {Contacto} from "./Contacto";
import {Informacion} from "./Informacion";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
/*import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ProductServices from './service/ProductServices';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import {dialog, Dialog} from 'primereact/dialog';
import {panel,Panel} from 'primereact/panel';
*/
class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/informacion" component={Informacion}/>
          <Route path="/products" component={Products}/>
          <Route path="/" component={Contacto}/>
        </Switch>
      </Router>
    )
  }

}
export default App;