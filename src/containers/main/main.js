import React, {Component} from 'react';
import { connect } from 'react-redux'

import styles from './main.css';

import Devices from '../../components/devices/devices.js';

class MainPage extends Component{
  constructor(props){
    super(props);
    this.state={
      category_devices: this.props.devices,
      selected_floor: "../../public/images/floors/floor1_big.png",
      selected_floor_number: 1
    };
    //this.selectType = this.selectType.bind(this);
};

  selectType(target){
      //console.log('Before', this.state.category_devices);
      //const target = event.target.getAttribute('data-key');
      //console.log(this.state.selected_floor_number)
      const all = this.props.devices;
      let result = []
      if (target == 0){
        result = all;
      }else{
        result = all.filter(each => each.parent_id == target);
      }
      this.setState({
        category_devices: result
      });
  };

  switchFloors(floor){
    const selected = `../../public/images/floors/floor${floor}_big.png`;
    //console.log(floor);
    this.setState({
      selected_floor: selected,
      selected_floor_number: floor
    })
  };

  createFloors = () => {
    let all = [];
    //console.log(this.props.floors)
    this.props.floors.forEach(function(each){
      //console.log(each);
      all.push(
        <button type="button"
          className="btn btn-outline-light"
          aria-pressed="true"
          key={each.id}
          onClick={() => this.switchFloors(each.id)}>
        {each.name}
        </button>
      )
    }.bind(this));
    return all
  };

  createTypes = () => {
    let all = [];
    //console.log(this.props.devices)
    //should change this but 6 device types so it works
    for (let i = 1; i < 6; i++){
      all.push(
        <button
          type="button"
          className="btn btn-outline-light deviceButton"
          aria-pressed="true"
          key={`type${i}`}
          data-key={`${i}`}
          onClick={() => this.selectType(i)}>
            <img className={`icon${i} iconTypes`}
            src={`../../public/images/type${i}.png`}/>
        </button>
      )
    }
    return all
  };

  render() {
    const imageAddr = '../../public/images/type5.png';
    var floorStyle = {
      background: `url(${this.state.selected_floor})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '850px',
      width: '1500px',
      margin: '0 auto'
    }
    return(
      <div className='container-table mainPage'>
        <div className='iconBar row main-align'>
          <div className='text-center'>
              {this.createTypes()}
              <span className='fadeLine'/>
              <ul className='floors'>
                {this.createFloors()}
              </ul>
          </div>
            <div className='text-center' style={floorStyle}>
              <Devices
                devices={this.state.category_devices}
                floor={this.state.selected_floor_number}/>
            </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { devices: state.devices, floors: state.floors}
}

export default connect(mapStateToProps)(MainPage);
