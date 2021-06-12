import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      isPickingHours: true,
      isAm: false,
      setHour: 12,
      setMinute: '00',
      setAmOrPm: 'am'
      };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  /*componentWillMount() {
    clearInterval(this.timerId);
  }*/

  render() {
    return (
      <div className="container">
        <h2>Time set to {this.state.setHour}:{this.state.setMinute} {this.state.setAmOrPm}</h2>
        <div className="clock">
          <div
            className="hour_hand"
            style={{
              transform: `rotateZ(${this.state.time.getHours() * 30+this.state.time.getMinutes()/2}deg)`
            }}
          />
          <div
            className="min_hand"
            style={{
              transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
            }}
          />
          <div
            className="sec_hand"
            style={{
              transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
            }}
          />

          {
            this.state.isPickingHours ?
              <>
                <button className="button12" onClick={()=>this.setState({isPickingHours: false,setHour: 12})}>12</button>
                <button className="button1" onClick={()=>this.setState({isPickingHours: false,setHour: 1})}>1</button>
                <button className="button2" onClick={()=>this.setState({isPickingHours: false,setHour: 2})}>2</button>
                <button className="button3" onClick={()=>this.setState({isPickingHours: false,setHour: 3})}>3</button>
                <button className="button4" onClick={()=>this.setState({isPickingHours: false,setHour: 4})}>4</button>
                <button className="button5" onClick={()=>this.setState({isPickingHours: false,setHour: 5})}>5</button>
                <button className="button6" onClick={()=>this.setState({isPickingHours: false,setHour: 6})}>6</button>
                <button className="button7" onClick={()=>this.setState({isPickingHours: false,setHour: 7})}>7</button>
                <button className="button8" onClick={()=>this.setState({isPickingHours: false,setHour: 8})}>8</button>
                <button className="button9" onClick={()=>this.setState({isPickingHours: false,setHour: 9})}>9</button>
                <button className="button10" onClick={()=>this.setState({isPickingHours: false,setHour: 10})}>10</button>
                <button className="button11" onClick={()=>this.setState({isPickingHours: false,setHour: 11})}>11</button>

              </>
            :
              <>
                <button className="button12" onClick={()=>this.setState({isPickingHours: true,setMinute: '00'})}>0</button>
                <button className="button1" onClick={()=>this.setState({isPickingHours: true,setMinute: '05'})}>5</button>
                <button className="button2" onClick={()=>this.setState({isPickingHours: true,setMinute: '10'})}>10</button>
                <button className="button3" onClick={()=>this.setState({isPickingHours: true,setMinute: '15'})}>15</button>
                <button className="button4" onClick={()=>this.setState({isPickingHours: true,setMinute: '20'})}>20</button>
                <button className="button5" onClick={()=>this.setState({isPickingHours: true,setMinute: '25'})}>25</button>
                <button className="button6" onClick={()=>this.setState({isPickingHours: true,setMinute: '30'})}>30</button>
                <button className="button7" onClick={()=>this.setState({isPickingHours: true,setMinute: '35'})}>35</button>
                <button className="button8" onClick={()=>this.setState({isPickingHours: true,setMinute: '40'})}>40</button>
                <button className="button9" onClick={()=>this.setState({isPickingHours: true,setMinute: '45'})}>45</button>
                <button className="button10" onClick={()=>this.setState({isPickingHours: true,setMinute: '50'})}>50</button>
                <button className="button11" onClick={()=>this.setState({isPickingHours: true,setMinute: '55'})}>55</button>
              </>
          }
          {
                this.state.isAm ?
                <>
                <button className="ampm" onClick={()=>this.setState({isAm: false, setAmOrPm: 'am'})}>am</button>
                </>
              :
                <>
                <button className="ampm" onClick={()=>this.setState({isAm: true,setAmOrPm: 'pm'})}>pm</button>
                </>
          }
          
          
        </div>
      </div>
        
      
    );
  }
}
