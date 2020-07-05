import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Compare from './components/Compare/Compare';
import Explore from './components/Explore/Explore';
import * as actions from './store/actions/index';
import CircularProgress from '@material-ui/core/CircularProgress';


function App(props) {
  useEffect(() => {
    props.onFetchingPhones(props.numberOfProducts);
    props.onFetchingAllPhones();
  }, [props.numberOfProducts]);


  let routes = (
    <Switch>
      <Route path="/compare" component={Compare} />
      <Route path="/" exact component={Explore} />
      <Redirect to="/" />
    </Switch>
  );

  if ( props.loading === true ) {
    routes = <CircularProgress 
      style={{position:"absolute",top:"50vh", left:"49vw"}}  />
  }

  if ( props.error ) {
    routes = <div style={{fontSize:"5rem",textAlign:"center", padding:"20rem"}}>{props.error}</div>
  }

  return (
    <Container fluid="true" style={{position:"relative"}}>
      <Navbar />
      <ItemDetails />
      {routes}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
      loading: state.phones.loading,
      numberOfProducts: state.phones.numberOfProducts,
      error: state.phones.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchingPhones: (numberOfProducts) => dispatch(actions.fetchPhones(numberOfProducts)),
      onFetchingAllPhones: () => dispatch(actions.fetchAllPhones())
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
