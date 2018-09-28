import React, {Component} from 'react';
import styles from './splash.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDevices } from '../../actions/index.js'

class Splash extends Component {
constructor(props){
  super(props);
  this.state={

  }
  this.props.fetchDevices();
}
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

function mapDispatchToProps(dispatch) {
  //makes sure action flows into middleware and then into reducers
  return bindActionCreators({ fetchDevices }, dispatch);
}

export default connect(null, mapDispatchToProps)(Splash);
