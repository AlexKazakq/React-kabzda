import React from "react";
import s from './OnOff.module.css'

export type OnOffPropsType = {
    status: boolean;
}

const OnOff = (props: OnOffPropsType) => {
    if (props.status) {
    return (
        <div className={s.container}>
            <div className={s.greenBox}><p>On</p></div>
            <div className={s.box}><p>Off</p></div>
            <div className={s.greenCircle}></div>
        </div>
    )} else {
        return (
            <div className={s.container}>
                <div className={s.box}><p>On</p></div>
                <div className={s.redBox}><p>Off</p></div>
                <div className={s.redCircle}></div>
            </div>
        )
    }
};

export default OnOff;