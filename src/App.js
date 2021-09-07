import React, {useState} from "react";
import Clock from './lib/components/Clock';

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
            />
        </div>
    )
}

