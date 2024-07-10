// import * as React from 'react';
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router"
// import { addNewOrder, addToShoppingCart, deleteFromShoppingCart, reduceFromShoppingCart, deleteAllShoppingCart } from "../features/order/orderSlice"
// import { updateProductToShow } from "../features/product/productSlice"

// import Card from '@mui/material/Card';
// import Grid from '@mui/material/Grid';
// import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';


// export default function ShoppingCart() {
//     const shoppingCart = useSelector(x => x.order.shoppingCart)
//     const user = useSelector(x => x.user.currentUser)
//     const products = useSelector(x => x.product.arrProduct)
//     const nav = useNavigate()
//     const dispatch = useDispatch()

//     const order = () => {
//         for (let i = 0; i < shoppingCart.length; i++) {
//             let index = products.findIndex(x => x.id == shoppingCart[i].id)
//             let p = products[index]
//             if (parseInt(p.qty) < parseInt(shoppingCart[i].count)) {
//                 alert("you cannt buy " + shoppingCart[i].count + " " + p.name + " the mount in stock is " + p.qty)
//                 return
//             }
//         }

//         let date = new Date()
//         let order = { userId: user.id, orderDate: date, dueDate: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000), shoppingCart: shoppingCart }
//         dispatch(addNewOrder(order))
//         for (let i = 0; i < shoppingCart.length; i++) {
//             let index = products.findIndex(x => x.id == shoppingCart[i].id)
//             let p = products[index]
//             dispatch(updateProductToShow({ product: { ...p, qty: parseInt(p.qty) - parseInt(shoppingCart[i].count) }, id: p.id }))
//         }
//         dispatch(deleteAllShoppingCart())
//         nav('/products')

//     }
//     return (
//         <div>

//             <h1 style={{ textAlign: 'center' }}>shoppingCart</h1>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     '& > :not(style)': {
//                         m: -8,
//                         width: 370,
//                         height: 60,
//                         backgroundColor: '#3f51b5',
//                         marginLeft: '18.5vw'
//                     },
//                 }}
//             >
//                 <Paper elevation={3} >
//                     <h2>total price:{(shoppingCart).reduce((sum, item) => sum + item.count * item.price, 0)}</h2>
//                 </Paper>
//                 {shoppingCart.length > 0 && <button onClick={order}><h2>add order</h2></button>}
//             </Box>

//             <Grid container spacing={2} justifyContent="center">
//                 {shoppingCart.map(item => (
//                     <Card sx={{ maxWidth: 345, backgroundColor: '#c62828', marginLeft: "2vw", marginTop: "5vh" }}>
//                         <CardContent>
//                             <p>name:{products[products.findIndex(x => x.id == item.id)].name}</p>
//                             <p>count:{item.count}</p>
//                             <p>price per unit:{item.price}</p>
//                             <p>price: {item.count * item.price}</p>
//                             <button onClick={() => { dispatch(deleteFromShoppingCart(item.id)) }}>delete</button>
//                             <button onClick={() => { dispatch(addToShoppingCart({ id: item.id, count: 1 })) }}>+</button>
//                             <button onClick={() => { dispatch(reduceFromShoppingCart(item.id)) }}>-</button>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </Grid>

//         </div>
//     )
// }

import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { addNewOrder, addToShoppingCart, deleteFromShoppingCart, reduceFromShoppingCart, deleteAllShoppingCart } from "../features/order/orderSlice"
import { updateProductToShow } from "../features/product/productSlice"

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function ShoppingCart() {
    const shoppingCart = useSelector(x => x.order.shoppingCart)
    const user = useSelector(x => x.user.currentUser)
    const products = useSelector(x => x.product.arrProduct)
    const nav = useNavigate()
    const dispatch = useDispatch()

    const order = () => {
        for (let i = 0; i < shoppingCart.length; i++) {
            let index = products.findIndex(x => x.id == shoppingCart[i].id)
            let p = products[index]
            if (parseInt(p.qty) < parseInt(shoppingCart[i].count)) {
                alert("you cannt buy " + shoppingCart[i].count + " " + p.name + " the mount in stock is " + p.qty)
                return
            }
        }

        let date = new Date()
        let order = { userId: user.id, orderDate: date, dueDate: new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000), shoppingCart: shoppingCart }
        dispatch(addNewOrder(order))
        for (let i = 0; i < shoppingCart.length; i++) {
            let index = products.findIndex(x => x.id == shoppingCart[i].id)
            let p = products[index]
            dispatch(updateProductToShow({ product: { ...p, qty: parseInt(p.qty) - parseInt(shoppingCart[i].count) }, id: p.id }))
        }
        dispatch(deleteAllShoppingCart())
        nav('/products')

    }
    return (
        <div>

            <h1 style={{ textAlign: 'center' }}>shoppingCart</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: -8,
                        width: 370,
                        height: 60,
                        backgroundColor: '#3f51b5',
                        marginLeft: '18.5vw'
                    },
                }}
            >
                <Paper elevation={3} >
                    <h2>total price:{(shoppingCart).reduce((sum, item) => sum + item.count * item.price, 0)}</h2>
                </Paper>
                {shoppingCart.length > 0 && <button onClick={order}><h2>add order</h2></button>}
            </Box>

            <Grid container spacing={2} justifyContent="center">
                {shoppingCart.map(item => (
                    <Card sx={{ maxWidth: 345, backgroundColor: '#c62828', marginLeft: "2vw", marginTop: "5vh" }}>
                        <CardContent>
                            <p>name:{products[products.findIndex(x => x.id == item.id)].name}</p>
                            <p>count:{item.count}</p>
                            <p>price per unit:{item.price}</p>
                            <p>price: {item.count * item.price}</p>
                            <button onClick={() => { dispatch(deleteFromShoppingCart(item.id)) }}>delete</button>
                            <button onClick={() => { dispatch(addToShoppingCart({ id: item.id, count: 1 })) }}>+</button>
                            <button onClick={() => { dispatch(reduceFromShoppingCart(item.id)) }}>-</button>
                        </CardContent>
                    </Card>
                ))}
            </Grid>

        </div>
    )
}

