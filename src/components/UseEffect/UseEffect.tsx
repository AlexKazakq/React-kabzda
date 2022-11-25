import React, {useEffect, useState} from "react";

export const UseEffect = () => {

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect fires render and every when counter was changed');
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

