import React from 'react';
import {Container} from 'react-bootstrap';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
/* import ItemDetails from './components/ItemDetails/ItemDetails'; */
import Compare from './components/Compare/Compare';
import Explore from './components/Explore/Explore';

function App() {
  let routes = (
    <Switch>
      <Route path="/compare" component={Compare} />
      <Route path="/" exact component={Explore} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Container fluid="true">
      <Navbar />
{/*       <ItemDetails /> */}
      {routes}
    </Container>
  );
}

export default withRouter(App);
