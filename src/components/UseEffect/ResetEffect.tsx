import React, {useEffect, useState} from "react";

export const ResetEffect = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('RESET EFFECT')
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return (
        <>
    Hello, counter: {counter} <button onClick={increase}>+</button>
        </>
    );
};
