import { Routes, Route } from "react-router-dom"
import ProductList from "../../features/product/productList"
import OrderList from "../../features/order/orderList"
import OrderDetails from "../../features/order/orderDetails"
import ProductDetails from "../../features/product/productDetails"



export default function InitRoute() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ProductList></ProductList>}></Route>
                <Route path='/products' element={<ProductList></ProductList>}></Route>
                <Route path='/orders' element={<OrderList></OrderList>}></Route>
                <Route path='/orderDetails/:index' element={<OrderDetails></OrderDetails>}></Route>
                <Route path='/orderDetails/:index' element={<OrderDetails></OrderDetails>}></Route>
                <Route path='prodactDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
            </Routes>
        </div>
    )
}




