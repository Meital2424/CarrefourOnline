import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import UserRoute from '../allRoutes/userRoute';
import InitRoute from '../allRoutes/initRoute';
import { logOut } from '../../features/user/userSlice';
import logo from '../../images/logo.png'; // Import the logo image
import Login from "../login"
import ShoppingCart from '../shoppingCart';

export default function NavBarUser() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const exit = () => {
        dispatch(logOut());
        setValue(0);
        nav('/enter')   
    };

    const tabRoutes = [
        { label: 'exit', onClick: exit },
        { label: 'login', path: '/login' },
        { label: 'products', path: '/products' },
        { label: 'Shopping Cart', path: '/shoppingCart' },
    ];

    const handleTabClick = (route, index) => () => {
        setValue(index);
        if (route.path) {
            nav(route.path);
        }
        if (route.onClick) {
            route.onClick();
        }
    };

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#90a4ae' }}>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="white"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Box sx={{ textAlign: 'center', marginBottom: 2, marginTop: 2 }}>
                            <img src={logo} alt="Logo" style={{ height: '6vh' }} />
                        </Box>
                        {tabRoutes.map((route, index) => (
                            <Tab
                                key={index}
                                label={route.label}
                                value={index}
                                onClick={handleTabClick(route, index)}
                            />
                        ))}

                    </Tabs>

                </Box>
            </AppBar>
            <Box sx={{ marginTop: 2 }}>
                {value === 0 && <UserRoute />}
                {value === 1 && <Login />}
                {value === 3 && <ShoppingCart />}
            </Box>

            <InitRoute />
        </div>
    );
}