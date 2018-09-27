import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDevices } from '../../actions/index.js'

import styles from './main.css';

class MainPage extends Component{
  constructor(props){
  super(props);
  this.state={

  };

  this.props.fetchDevices();
}

  selectType = () => {
      //requires API go access the devices of this type
      //should also add a class to make the div greyer after selection
      //console.log('selected device type');
      console.log(this.state.test);
  }

  createTypes = () => {
    let all = [];

    for (let i = 1; i < 6; i++){
      all.push(
        <img className={`icon${i} iconTypes`}
        key={`type${i}`}
        onClick={() => this.selectType()}
        src={`../../public/images/type${i}.png`}/>
      )
    }
    //console.log(all);
    return all
  }

  render() {
    const imageAddr = '../../public/images/type5.png'
    return(
      <div className='container-table mainPage'>
        <div className='row main-align'>
          <div className='text-center'>
              {this.createTypes()}
              <span className='fadeLine'/>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  //makes sure action flows into middleware and then into reducers
  return bindActionCreators({ fetchDevices }, dispatch);
}

export default connect(null, mapDispatchToProps)(MainPage);
