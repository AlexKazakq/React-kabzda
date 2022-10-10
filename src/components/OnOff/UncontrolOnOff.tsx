import React, {useId, useState} from "react";
import s from './OnOff.module.css'


type UncontrolledOnOfType = {
    onChange: (on: boolean) => void
}

export const UncontrolOnOff = (props: UncontrolledOnOfType) => {
    console.log('UncontrolOnOff rendering')
    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }

    const onClickOnHandler = () => {
        setOn(true)
        props.onChange(true)
    }

    const onClickOffHandler = () => {
        setOn(false)
        props.onChange(false)
    }

    const onClicked = (status: boolean) => {
        setOn(status)
        props.onChange(status)
    }

    return (
        <div>
            <div style={onStyle} onClick={() => onClicked(true)}>On</div>
            <div style={offStyle} onClick={() => onClicked(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
};
