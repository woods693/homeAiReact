import React, {Component} from 'react';

import styles from './devices.css';

export default class Devices extends Component {
  constructor(props){
    super(props);
    this.state={
      //all_devices: this.props.devices
    }
    this.logger = this.logger.bind(this);
    this.displayDevices = this.displayDevices.bind(this);
  };

  logger(){
    console.log(this.props.devices)
    console.log(this.props.floor)
  };

  flipper(status, index){
   //console.log(status);
   //console.log(index);
   var copy = this.props.devices;
    if (status == 'on'){
      copy[index].Status_Name = 'off';
    }else{
      copy[index].Status_Name = 'on';
    }
    this.setState({
      all_devices: copy
    })
  };
  //

  displayDevices(){
    //console.log(this.state.all_devices);
    //dont have Motion Detector, Combination Switch, Combination Outlet, Combination Speaker
    let allDevices = []
    //should set a variable instead
    this.props.devices.forEach(function(each, index){
      var left = ('' + each.X) + 'px';
      var top = ('' + each.Y) + 'px';
      //console.log(this.props.floor)
      if(each.Floor_ID == this.props.floor){
        //console.log(each.Type_Name)
        var stat = each.Status_Name.toLowerCase();
        //console.log(status)
        //console.log(status);
        allDevices.push(
          <div style={{left: left,
            top: top ,
            position: 'absolute',
            margin: '0 auto'}}
            key={each.ID} className="deviceList">
            <img onClick={() => this.flipper(each.Status_Name.toLowerCase(), index)}
            src={`../../public/images/mapIcons/${each.Type_Name}_${stat}40.png`}/>
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
