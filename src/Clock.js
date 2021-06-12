import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      isPickingHours: true,
      isAm: false,
      hour: 12,
      minute: '00',
      bn: 'am',
      check: true
      };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="container">
        <h2>Time set to {this.state.hour}:{this.state.minute} {this.state.bn}</h2>
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
                <span className="twelve" onClick={()=>this.setState({isPickingHours: false,hour: 12})}>12</span>
                <span className="one" onClick={()=>this.setState({isPickingHours: false,hour: 1})}>1</span>
                <span className="two" onClick={()=>this.setState({isPickingHours: false,hour: 2})}>2</span>
                <span className="three" onClick={()=>this.setState({isPickingHours: false,hour: 3})}>3</span>
                <span className="four" onClick={()=>this.setState({isPickingHours: false,hour: 4})}>4</span>
                <span className="five" onClick={()=>this.setState({isPickingHours: false,hour: 5})}>5</span>
                <span className="six" onClick={()=>this.setState({isPickingHours: false,hour: 6})}>6</span>
                <span className="seven" onClick={()=>this.setState({isPickingHours: false,hour: 7})}>7</span>
                <span className="eight" onClick={()=>this.setState({isPickingHours: false,hour: 8})}>8</span>
                <span className="nine" onClick={()=>this.setState({isPickingHours: false,hour: 9})}>9</span>
                <span className="ten" onClick={()=>this.setState({isPickingHours: false,hour: 10})}>10</span>
                <span className="eleven" onClick={()=>this.setState({isPickingHours: false,hour: 11})}>11</span>

              </>
            :
              <>
                <span className="twelve" onClick={()=>this.setState({isPickingHours: true,minute: '00'})}>0</span>
                <span className="one" onClick={()=>this.setState({isPickingHours: true,minute: '05'})}>5</span>
                <span className="two" onClick={()=>this.setState({isPickingHours: true,minute: '10'})}>10</span>
                <span className="three" onClick={()=>this.setState({isPickingHours: true,minute: '15'})}>15</span>
                <span className="four" onClick={()=>this.setState({isPickingHours: true,minute: '20'})}>20</span>
                <span className="five" onClick={()=>this.setState({isPickingHours: true,minute: '25'})}>25</span>
                <span className="six" onClick={()=>this.setState({isPickingHours: true,minute: '30'})}>30</span>
                <span className="seven" onClick={()=>this.setState({isPickingHours: true,minute: '35'})}>35</span>
                <span className="eight" onClick={()=>this.setState({isPickingHours: true,minute: '40'})}>40</span>
                <span className="nine" onClick={()=>this.setState({isPickingHours: true,minute: '45'})}>45</span>
                <span className="ten" onClick={()=>this.setState({isPickingHours: true,minute: '50'})}>50</span>
                <span className="eleven" onClick={()=>this.setState({isPickingHours: true,minute: '55'})}>55</span>
              </>
          }
          {
                this.state.isAm ?
                <>
                <span className="ampm" onClick={()=>this.setState({isAm: false, bn: 'am'})}>am</span>
                </>
              :
                <>
                <span className="ampm" onClick={()=>this.setState({isAm: true,bn: 'pm'})}>pm</span>
                </>
          }
          
          
        </div>
      </div>
        
      
    );
  }
}
