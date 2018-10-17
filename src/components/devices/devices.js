import React, {Component} from 'react';

import styles from './devices.css';

export default class Devices extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    this.logger = this.logger.bind(this);
    this.displayDevices = this.displayDevices.bind(this);
  };

  logger(){
    console.log(this.props.devices)
    console.log(this.props.floor)
  };
  //

  displayDevices(){
    //dont have Motion Detector, Combination Switch, Combination Outlet, Combination Speaker
    let allDevices = []
    //should set a variable instead
    this.props.devices.forEach(function(each){
      var left = ('' + each.X) + 'px';
      var top = ('' + each.Y) + 'px';
      //console.log(this.props.floor)
      if(each.Floor_ID == this.props.floor){
        //console.log(each.Type_Name)
        var status = each.Status_Name.toLowerCase();
        //console.log(status);
        allDevices.push(
          <div style={{left: left,
            top: top ,
            position: 'absolute',
            margin: '0 auto'}}
            key={each.ID} className="deviceList">
            <img src={`../../public/images/mapIcons/${each.Type_Name}_${status}40.png`}/>
          </div>
        );
      }
    }.bind(this));
    return allDevices;
  };
  render() {
    return (
      <div className='devices' style={{position:'relative'}}>
        {this.displayDevices()}
      </div>
    )
  }
};
