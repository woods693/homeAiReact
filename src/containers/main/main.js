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
  };
};

  selectType = (event) => {
      //console.log('Before', this.state.category_devices);
      const target = event.target.getAttribute('data-key');
      const all = this.props.devices;

      const result = all.filter(each => each.parent_id == target);
      this.setState({
        category_devices: result
      });
  };

  switchFloors(floor){
    const selected = `../../public/images/floors/floor${floor}_big.png`;
    this.setState({
      selected_floor: selected,
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

    for (let i = 1; i < 6; i++){
      all.push(
        <button
          type="button"
          className="btn btn-outline-light deviceButton"
          aria-pressed="true"
          key={`type${i}`}
          data-key={`${i}`}
          onClick={this.selectType.bind(this)}>
            <img className={`icon${i} iconTypes`}
            src={`../../public/images/type${i}.png`}/>
        </button>

      )
    }
    return all
  };

  render() {
    const imageAddr = '../../public/images/type5.png';
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
          <div className='deviceBar'>
            <img src={this.state.selected_floor}/>
            <Devices devices={this.state.category_devices}/>
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
