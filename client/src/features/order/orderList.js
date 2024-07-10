import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders, deleteOrderToShow } from "./orderSlice";
import { useNavigate } from "react-router-dom";
import OrderToShow from "./orderToShow";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';

export default function OrderList() {
    const dispatch = useDispatch();
    const arrOrders = useSelector(state => state.order.arrOrders);
    const currentUser = useSelector(state => state.user.currentUser);
    const currentStatus = useSelector(state => state.user.status);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllOrders());
    }, [dispatch]);

    const handleDeleteOrder = (id) => {
        dispatch(deleteOrderToShow(id));
    };

    const handleShowDetails = (orderId) => {
        console.log(`Navigating to order details: ${orderId}`); // Debug log
        navigate(`/orderDetails/${orderId}`);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Order List</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 2,
                        width: 290,
                        height: 300,
                        backgroundColor: '#c62828',
                    },
                }}
                marginLeft="4vw"
                textAlign="center"
            >
                {arrOrders.map(order => (
                    (currentStatus === 'admin' || currentUser.id === order.userId) && (
                        <CardContent key={order.id} onClick={() => handleShowDetails(order.id)}>
                            <h1>order number {order.id}</h1>
                            <OrderToShow order={order} />
                            <h5>*click me</h5>
                            {/* {currentStatus === 'admin' && new Date(order.dueDate) > new Date() && (
                                <button onClick={() => handleDeleteOrder(order.id)}>Delete Order</button>
                            )} */}
                        </CardContent>
                    )
                ))}

            </Box>
        </div>
    );
}

