import React, {ChangeEvent, useRef, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export const UncontrolledInputSecret = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }

    return (

        <>
            {/*<input onChange={onChangeHandler}/> - value: {value}*/}
            <input ref={inputRef} />
            <button onClick={onClickHandler}>save</button> - actual value: {value}
        </>
    );
};

export const UncontrolledInput = React.memo(UncontrolledInputSecret)