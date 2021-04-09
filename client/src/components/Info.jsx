import React, {useState, useEffect} from 'react';
import socket from '../adapters/socket';
import UserCount from './UserCount';
import UserList from './UserList';

const Info = () => {
    const [users, setUsers] = useState([]);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        socket.on('userUpdate', users => {
            setUsers(users);
            if(!enabled) setEnabled(true);
            else if (users.length === 0) setEnabled(false);
        })

        return () => {
            socket.off('userUpdate');
        };
    });

    return ( 
    <>
        {enabled ? // If enabled, render UserCount and UserList, if not render nothing
        <>
        <UserCount users={users}/>
        <UserList users={users}/>
        </>
        : <></>
        }
    </>
    )
}

export default Info;