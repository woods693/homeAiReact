import React, {Component} from 'react';
import styles from './splash.css';

export default class Splash extends Component {

  render () {
    return (
        <div className='splashPage container-table'>
          <div className='row vertical-center-row'>
            <div id='logo' className='animated fadeIn text-center'>LOGO</div>
          </div>
        </div>
    );
  }
}
