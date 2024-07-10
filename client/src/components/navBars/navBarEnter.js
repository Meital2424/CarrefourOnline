import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/user/userSlice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import logo from '../../images/logo.png';
import { useNavigate } from "react-router-dom";


export default function NavBarEnter() {

    const [setValue] = useState(0);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const exit = () => {
        dispatch(logOut());
        setValue(0);
        nav('/enter')
    };

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#90a4ae' }}>
                <Box sx={{ width: '100%' }}>
                    <Box onClick={exit} sx={{ textAlign: 'left', marginBottom: 2, marginTop: 2 }}>
                        <img src={logo} alt="Logo" style={{ height: '6vh' }} />
                    </Box>
                </Box>
            </AppBar>
        </div>
    )

}