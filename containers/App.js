import React, {Component} from 'react';
import NavBar from './NavBar';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import Splash from './splash/splash';
import MainPage from './main/main';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ready: false,
    }
    this.setTimer();
  }

  handleClick(){
    console.log('ready')
    this.setState({
      ready: true,
    });
  }

  //After 5 seconds, splash page will dissapear
  setTimer() {
    setTimeout(() => {this.setState({ready: true})}, 5000)
  }

  render (){

          if(this.state.ready === false){
            return(
              <div onClick={() => this.handleClick()}>
                <Splash />
              </div>
            );
          }

          return(
            <MainPage />
          );
  }
}
