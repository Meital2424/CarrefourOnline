import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ManagerRoute from '../allRoutes/managerRoute';
import InitRoute from '../allRoutes/initRoute';
import { logOut } from '../../features/user/userSlice';
import logo from '../../images/logo.png'; // Import the logo image
import UsersList from '../../features/user/usersList';
import ProdactToAdd from '../../features/product/productToAdd';
import { AppBar } from '@mui/material';

export default function NavBarManager() {
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
        { label: 'users', path: '/users' },
        { label: 'orders', path: '/orders' },
        { label: 'add product', path: '/productToAdd' },
        { label: 'products', path: '/products' },
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
                        indicatorColor="primary"
                        aria-label="white tabs example"

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
                {value === 0 && <ManagerRoute />}
                {value === 1 && <UsersList />}
                {value === 3 && <ProdactToAdd />}
            </Box>
            <InitRoute />
        </div>
    );
}