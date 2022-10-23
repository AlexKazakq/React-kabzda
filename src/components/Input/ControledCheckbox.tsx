import React, {ChangeEvent, useState} from "react";


export const ControledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.checked)}

    return (
        <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
    );
};

