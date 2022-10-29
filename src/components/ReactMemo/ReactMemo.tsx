import React, {useState} from "react";
import {NewMessageCounter} from "./NewMessageCounter";
import {Users} from "./Users";


export const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valer', 'Artem'])
    const addUser = () => {
        const newUsers = [...users,'Sveta ' + new Date().getTime() ]
        setUsers(newUsers)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    );
};

