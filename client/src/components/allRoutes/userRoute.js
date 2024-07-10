import InitRoute from "./initRoute";
import { Routes, Route } from "react-router-dom"
import ShoppingCart from "../shoppingCart";


export default function UserRoute() {
    return (
        <div>
            <InitRoute />
            <Routes>
                <Route path='/shoppingCart' element={<ShoppingCart />}></Route>
            </Routes>
        </div>

    )
}