import {Slider} from "@mui/material";
import React from "react";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    step: number
     disable: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disable,
        // ...restProps
    }
) => {

    const handleChange = (event: Event, value: number | number[]) => {
        onChangeRange && onChangeRange(value as [number, number]);
    };

    return (
        <div style={{width: 140}}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="off"
                min={min}
                max={max}
                step={step}
                disabled={disable}
                //getAriaValueText={valuetext}
            />
        </div>
    )
}
export default SuperDoubleRange
