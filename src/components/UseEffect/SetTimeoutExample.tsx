import React, {useEffect, useState} from "react";

const getZeroFunc = (time: number) => time < 10 ? '0' + time : time

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)

    const [date, setDate] = useState(new Date())


    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = counter.toString();
    //     }, 1000)
    // }, [])


    // useEffect(() => {
    //     setInterval(() => {
    //         setCounter(state => state + 1)
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            {getZeroFunc(date.getHours())}:{getZeroFunc(date.getMinutes())}:{getZeroFunc(date.getSeconds())}
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        </div>
    );
};

