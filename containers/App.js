import React, {Component} from 'react';
import NavBar from './NavBar';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import Splash from './splash/splash';

export default class App extends Component {
  constructor(props){
    this.state={
      ready: false,
    }
  }
  render (){
      return(
          <div>
            <Splash />
          </div>
      )
  }
}
