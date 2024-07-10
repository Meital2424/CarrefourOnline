import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addToShoppingCart } from "../order/orderSlice";
import { deleteProductToShow, fetchAllProducts, updateProductToShow } from "./productSlice";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productArr = useSelector((x) => x.product.arrProduct);
    const currentStatus = useSelector((x) => x.user.status);
    const [count, setCount] = useState(1);
    const [editMode, setEditMode] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState({
        name: '',
        description: '',
        content: '',
        price: '',
        isCooling: false,
        company: '',
        prodDate: '',
        qty: ''
    });

    useEffect(() => {
        dispatch(fetchAllProducts()); // ensure products are up to date
    }, [dispatch]);

    const index = productArr.findIndex((x) => x.id == id);
    const product = productArr[index];

    useEffect(() => {
        if (product) {
            setUpdatedProduct({
                name: product.name,
                description: product.description,
                content: product.content,
                price: product.price,
                isCooling: product.isCooling,
                company: product.company,
                prodDate: product.prodDate,
                qty: product.qty
            });
        }
    }, [product]);

    const delProd = async () => {
        await dispatch(deleteProductToShow({ id: id }));
        navigate('/products');
    };

    const add = () => {
        dispatch(addToShoppingCart({ id: id, count: Number(count), price: product.price }));
        navigate('/products');
    };

    const handleUpdateProduct = async () => {
        await dispatch(updateProductToShow({ product: updatedProduct, id: id }));
        setEditMode(false);
    };

    if (!product) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div>
            {editMode ? (
                <div>
                    <h1 style={{ textAlign: 'center' }}>Update Product</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdateProduct();
                        }}
                    >
                        <input
                            type="text"
                            value={updatedProduct.name}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            value={updatedProduct.description}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
                            placeholder="Description"
                        />
                        <input
                            type="text"
                            value={updatedProduct.content}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, content: e.target.value })}
                            placeholder="Content"
                        />
                        <input
                            type="number"
                            value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            placeholder="Price"
                        />
                        <label>
                            Is Cooling:
                            <input
                                type="checkbox"
                                checked={updatedProduct.isCooling}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, isCooling: e.target.checked })}
                            />
                        </label>
                        <input
                            type="text"
                            value={updatedProduct.company}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, company: e.target.value })}
                            placeholder="Company"
                        />
                        <input
                            type="date"
                            value={updatedProduct.prodDate}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, prodDate: e.target.value })}
                        />
                        <input
                            type="number"
                            value={updatedProduct.qty}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, qty: e.target.value })}
                            placeholder="Quantity"
                        />
                        <button type="submit">Save Changes</button>
                        <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
                        <h2>השינויים מתעדכנים לאחר שחוזרים לרשימת המוצרים*</h2>
                    </form>
                </div>
            ) : (
                <Card sx={{ maxWidth: 400, backgroundColor: '#c62828', marginLeft: "38vw" }}>
                    <CardContent >
                        <div>
                            <h1>{product.name}</h1>
                            <p>Description: {product.description}</p>
                            <p>Content: {product.content}</p>
                            <p>Price: {product.price}</p>
                            <p>Is Cooling: {product.isCooling ? "Yes" : "No"}</p>
                            <p>Company: {product.company}</p>
                            <p>Production Date: {product.prodDate}</p>
                            <p>Quantity: {product.qty}</p>
                            {currentStatus === "admin" ? (
                                <>
                                    <Stack marginLeft="5vw" marginTop="5vh" direction="row" >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#283593',
                                                color: 'white',
                                            }}
                                            onClick={() => setEditMode(true)}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#283593',
                                                color: 'white',
                                                marginLeft: '3vw'
                                            }}
                                            onClick={() => delProd()}
                                        >
                                            Delete
                                        </Button>

                                    </Stack>

                                </>
                            ) : (
                                <>
                                    <input
                                        type="number"
                                        min="1"
                                        value={count}
                                        placeholder="Count"
                                        onChange={(e) => setCount(e.target.value)}
                                    />
                                    {/* <button onClick={() => add()}>Add to Shopping Cart</button> */}
                                    <Stack marginLeft="5vw" marginTop="5vh" direction="row" >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#283593',
                                                color: 'white',
                                            }}
                                            onClick={() => add()}
                                        >
                                            Add to Shopping Cart
                                        </Button>

                                    </Stack>
                                </>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )}

        </div>
    );
}