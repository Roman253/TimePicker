import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      isPickingHours: true,
      isAm: false,
      currentHour: 12,
      currentMinute: '0',
      currentAmOrPm: 'AM',
      };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  digitsHours() { 
      const buttons = [];
      for (let i = 1; i < 13 ; ++i) {
        buttons.push(<button className={"clock-digit" + " digit" + (i) }
        onClick={()=>this.setState({isPickingHours: false,currentHour: (i)})}>{i}</button>)
      }
      return buttons;
  }
 
  pad(n){
    return (n<10) ? ("0"+n):n;
  }
  
  digitsMinuts() { 
    const buttons = [];
    for (let i = 0, k = 5 ; i < 12 ; ++i, k+=5) {
      if (k === 60) {k=0};
      buttons.push(<button className={"clock-digit" + " digit" + (i+1) }
      onClick={()=>this.setState({isPickingHours: true,currentMinute: (k)})}>{k}</button>);
    }
    return buttons;
  }

  render() {
    return (
      <div className="clock">
        {/*<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>*/}
        <h2 className="TimeSet"> 
        {
            this.state.isAm ?
            <>
            <button className="ampm" onClick={()=>this.setState({isAm: false, currentAmOrPm: 'AM'})}>AM</button>
            </>
            :
            <>
            <button className="ampm" onClick={()=>this.setState({isAm: true,currentAmOrPm: 'PM'})}>PM</button>
            </>
        }  
        {this.state.currentHour}:{this.pad(this.state.currentMinute)} </h2>
          <div
            className="hand hour"
            style={{
              transform: `rotateZ(${this.state.time.getHours() * 30+this.state.time.getMinutes()/2}deg)`
            }}
          />
          <div
            className="hand min"
            style={{
              transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
            }}
          />
          <div
            className="hand sec"
            style={{
              transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
            }}
          />

          {
            this.state.isPickingHours ? <> {this.digitsHours()} </>  : <> {this.digitsMinuts()} </>
          }
           
      </div>
    );
  }
}
