import React, {Component} from 'react';

import styles from './main.css';

export default class MainPage extends Component{

selectType = () => {
    //requires API go access the devices of this type
    //should also add a class to make the div greyer after selection
    console.log('selected device type');
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
  console.log(all);
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
