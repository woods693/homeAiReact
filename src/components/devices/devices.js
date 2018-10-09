import React, {Component} from 'react';

import styles from './devices.css';

export default class Devices extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    this.logger = this.logger.bind(this);
  };

  logger(){
    console.log(this.props.devices)
  };

  displayDevices(){
    let allDevices = []
    this.props.devices.forEach(function(each){
      allDevices.push(
        <div key={each.ID} className="deviceList">
          {each.Name}
        </div>
      );
    })
    return allDevices;
  };
  render() {
    return (
      <div>
        {this.displayDevices()}
      </div>
    )
  }
};
