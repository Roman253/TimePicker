# React Analog Time Picker
## _Simple and easy to use timepicker_

## Demo
https://react-analog-time-picker.netlify.app/

## Installation
Install by executing ```npm i react-analog-time-picker or yarn add react-analog-time-picker```.
Import by adding ```import Clock from 'react-analog-time-picker```.
Use by adding ```<Clock />```. Use onChange prop for getting new values.


React Analogue Time Picker requires [Node.js](https://nodejs.org/) v10+ to run.

### Example
```
    import React, {useState} from "react";
    import Clock from 'react-analog-time-picker'
    
    export default function TimePicker(){
        const [value, setValue] = useState(new Date())
        const [selected, setSelected] = useState(null)
    
        const onTimeChange = function(time){
            setSelected(time)
        }
    
        return(
            <div>
                <Clock 
                    value={value}
                    onTimeChange={onTimeChange}
                    digitsColor={'blue'}
                    fontsColor={'yellow'}
                    backgroundColor={'white'}
                />
            </div>
        )
    }
```

#### User Guide
| Prop name       | Description                                | Default Value | Example values                                                                                 |
|-----------------|--------------------------------------------|---------------|------------------------------------------------------------------------------------------------|
| onTimeChange    | A function called when a  time is selected |      n/a      | {   currentHour: Integer,   currentMinute: Integer,   isAm: Boolean,   currentAmOrPm: String } |
| value           | Initial time                               |      n/a      | new Date()                                                                                     |
| backgroundColor | Clock background color                     |     white     | 'white', 'yellow', etc                                                                         |
| fontsColor      | Font color for the time picker             |     pink     | 'white', 'black', etc                                                                          |
| digitsColor     | Color for the clock digits                 |     pink     | 'green', 'yellow', 'blue'                                                                      |



## License

MIT

