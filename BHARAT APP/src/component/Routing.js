import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { Container,Row,Col,Grid} from 'react-bootstrap';

// import ButtonAppBar from "./header"
import Headerr from "./headerr"
import Hashnav from "./hashnav"
import Career from "./career"
import ProductDetail from "../container/productDetail"
import Distributor from "./distributor"
import BHARATlocation from "./bharatlocation"
import Login from "./login"
import Register from "./register"
import Profile from "./profile"

const Routing = () => {
    return(
      <BrowserRouter>
           
                   
                  
              <Route exact path="/" component={Hashnav}/>  
              <Route exact path="/" component={Headerr}/>
              <Route exact path="/career" component={Career}/> 
              <Route exact path="/productDetail" component={ProductDetail}/> 
              <Route exact path="/distributor" component={Distributor}/>      
              <Route exact path="/Blocation" component={BHARATlocation}/> 
              <Route exact path="/login" component={Login}/>   
              <Route exact path="/register" component={Register}/>
              <Route exact path="/profile" component={Profile}/>
              <Route path={["/career", "/productDetail", "/distributor","/Blocation", "/login","/register", "/profile"]} component={Headerr} />
             
                
        </BrowserRouter>
    )
}

export default Routing;