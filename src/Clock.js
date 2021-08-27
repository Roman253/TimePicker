import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPickingHours: true,
      isAm: this.props.value.getHours()< 12,
      currentHour: this.props.value.getHours(),
      currentMinute: this.props.value.getMinutes(),
      currentAmOrPm: this.props.value.getHours()< 13 ? 'AM' :'PM' ,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.currentHour !== this.state.currentHour || 
      prevState.currentMinute !== this.state.currentMinute ||
      prevState.currentAmOrPm !== this.state.currentAmOrPm
      ){
        this.props.onTimeChange(this.state)
      }
  }


  digitsHours() { 
      const buttons = [];
      for (let i = 1; i < 13 ; ++i) {
        buttons.push(<button key={i} className={"clock-digit" + " digit" + (i) }
        style={{backgroundColor: this.props.digitsBackgroundColor, 
          color: this.props.digitsColor}}
        onClick={()=>{
          this.setState({isPickingHours: false,currentHour: (i)})
        }}>{i}</button>)
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
      buttons.push(<button key={i} className={"clock-digit" + " digit" + (i+1) }
      style={{backgroundColor: this.props.digitsBackgroundColor,
         color: this.props.digitsColor}}
      onClick={()=>{
        this.setState({isPickingHours: true,currentMinute: (k)})
      }}>{k}</button>);
    }
    return buttons;
  }
  
  render() {
    return (
      <div>
        <div className="clock" style={{backgroundColor: this.props.backgroundColor}}>
          <h2 className="TimeSet" > 
          {
              this.state.currentAmOrPm === 'AM' ?
              <>
              <button className="ampm" onClick={()=>
                this.setState({isAm: false, currentAmOrPm: 'PM'})
              }>AM</button>
              </>
              :
              <>
              <button className="ampm" onClick={()=>{
                this.setState({isAm: true,currentAmOrPm: 'AM'})}
              }>PM</button>
              </>
          }  
          {this.state.currentHour}:{this.pad(this.state.currentMinute)} 
          </h2>
            <div
              className="hand hour"
              style={{
                transform: `rotateZ(${this.props.value.getHours() * 30+
                  this.props.value.getMinutes()/2}deg)`,
                  background: this.props.handsColor}}
            />
            <div
              className="hand min"
              style={{
                transform: `rotateZ(${this.props.value.getMinutes() * 6}deg)`,
                background: this.props.handsColor
              }}
            />
            <div
              className="hand sec"
              style={{
                transform: `rotateZ(${this.props.value.getSeconds() * 6}deg)`,
                background: this.props.handsColor
              }}
            />

            {
              this.state.isPickingHours ? 
              <> {this.digitsHours()} </>  : <> {this.digitsMinuts()} </>
            }

        </div>
      </div>
    );
  }
}
