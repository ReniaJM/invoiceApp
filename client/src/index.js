import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import HomePage from "./components/routes/HomePage";
import CreateInvoice from "./components/routes/CreateInvoice";
import UpdateInvoice from "./components/routes/UpdateInvoice";
import ShowInvoice from "./components/routes/ShowInvoice";
import AllInvoices from "./components/routes/AllInvoices";
import PageNotFound from "./components/routes/PageNotFound";


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/creteInvoice' component={CreateInvoice}/>
      <Route exact path='/updateInvoice' component={UpdateInvoice}/>
      <Route exact path='/showInvoice' component={ShowInvoice}/>
      <Route exact path='/allInvoices' component={AllInvoices}/>
      <Route component={PageNotFound}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
