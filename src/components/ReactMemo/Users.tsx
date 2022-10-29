import React from "react";


export const SecretUsers = (props: {users: string[]}) => {
    console.log('USERS')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    );
};

export const Users = React.memo(SecretUsers)
