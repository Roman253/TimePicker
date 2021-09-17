## _Easy to use and simple to install Analog Time Picker_

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
                    digitsColor={'white'}
                    fontsColor={'rgb(86, 142, 247)'}
                    backgroundColor={'white'}
                    handsColor={'rgb(86, 142, 247)'}
                    timeSetColor={'rgb(219, 139, 163)'}
                />
            </div>
        )
    }
```

## User Guide
| Prop name       | Description                                | Default Value | Example values                                                                                 |
|-----------------|--------------------------------------------|---------------|------------------------------------------------------------------------------------------------|
| onTimeChange    | A function called when a  time is selected |      n/a      | {   currentHour: Integer,   currentMinute: Integer,   isAm: Boolean,   currentAmOrPm: String } |
| value           | Initial time                               |      n/a      | new Date()                                                                                     |
| backgroundColor | Clock background color                     |     white     | 'white', 'yellow', etc                                                                         |
| fontsColor      | Font color for the time picker             |     rgb(86, 142, 247)| 'white', 'black', etc                                                                      |
| digitsColor     | Color for the clock digits                 |     white     | 'white', 'yellow', 'blue', etc                                                                      |
| handsColor      | Color for the hands                        |    rgb(86, 142, 247) |'green','blue', 'pink', etc                                                                        |
|timeSetcolor     | Color for the hands timeSet                |    rgb(219, 139, 163)'|'green','blue', 'pink', etc                                                                    | 




## License

MIT

## author: rom.data
   Would love to hear you thoughts and suggestion at i.mydata132@gmail.com

## Troubleshooting    
    If you get an error starting with "There might be a problem with the project dependency tree". It is caused by yarn. you can either install with npm: 'npx create-react-app --use-npm my-app', or uninstall yarn