import InitRoute from "./initRoute"
import { Routes, Route } from "react-router-dom"
import ProdactToAdd from "../../features/product/productToAdd"
import ProductToUpdate from "../../features/product/productToUpdate"
import UsersList from "../../features/user/usersList"


export default function ManagerRoute() {
    return (
        <div>
            <InitRoute />
            <Routes>
                <Route path='/productToAdd' element={<ProdactToAdd />}></Route>
                <Route path='/productToUpdate/:index' element={<ProductToUpdate />}></Route>
                <Route path='/users' element={<UsersList></UsersList>}></Route>
            </Routes>
        </div>
    )
}