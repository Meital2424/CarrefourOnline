import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import UserDetails from "./userDetails"
import { fetchAllUsers } from "./userSlice"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function UsersList() {

    const arrUser = useSelector(x => x.user.arrUsers)

    const dispatch = useDispatch()

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        dispatch(fetchAllUsers())
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>userList</h1>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 2,
                        width: 300,
                        height: 300,
                        backgroundColor: '#c62828',
                    },
                }}
                marginLeft="8vw"
                textAlign="left"
            >
                {arrUser && arrUser.map(item => <Paper elevation={3} key={item.id}><UserDetails user={item} /></Paper>)}

            </Box>
        </div>
    )
}