import { useSelector } from "react-redux";
import { useParams } from "react-router";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function OrderDetails() {

    const index = useParams().index
    const orders = useSelector(x => x.order.arrOrders)
    const order = orders[index]
    return (
        <div>
            <Card sx={{ maxWidth: 400, backgroundColor: '#c62828', marginLeft: "38vw" }} >
                <CardContent >
                    <h1 style={{ textAlign: 'center' }}>{order.id}</h1>
                    <p>orderDate: {order.orderDate}</p>
                    <p>dueDate: {order.dueDate}</p>
                    <p>userId: {order.userId}</p>
                    <p>cart:</p>
                    <ul>
                        {(order.cart).map(item => <li key={item.id}>
                            <p>count:{item.count}</p>
                            <p>price per unit:{item.price}</p>
                            <p>price: {item.count * item.price}</p>
                        </li>)}
                    </ul>
                    <p>total price:{(order.cart).reduce((sum, item) => sum + item.count * item.price, 0)}</p>
                </CardContent>
            </Card>
        </div>
    )
}