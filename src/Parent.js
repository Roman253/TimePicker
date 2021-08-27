import React, {Component} from "react";
import "./styles.css";
import Clock from "./Clock";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: new Date(),
      currentHour: '',
      currentMinute: '',
      currentAmOrPm: '',
      backgroundColor: 'white',
      digitsBackgroundColor: 'white',
      handsColor: 'rgb(86, 142, 247);',
      digitsColor: 'rgb(219, 139, 163)'
    }

    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onTimeChange(time) {
    this.setState({...this.state, currentHour: time.currentHour, 
      currentMinute: time.currentMinute, currentAmOrPm: time.currentAmOrPm});
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  render(){
    return <Clock
      onTimeChange={this.onTimeChange} 
      value={this.state.time}
      backgroundColor={this.state.backgroundColor}
      digitsBackgroundColor={this.state.digitsBackgroundColor}
      digitsColor={this.state.digitsColor}
      handsColor={this.state.handsColor}
    />
  }
}