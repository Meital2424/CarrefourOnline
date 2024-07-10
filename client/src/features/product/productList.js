import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductToShow from "./productToShow";
import { fetchAllProducts } from "./productSlice";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function ProductList() {

    const arrProducts = useSelector(x => x.product.arrProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAllProduct();
    }, []);

    const fetchAllProduct = async () => {
        dispatch(fetchAllProducts());
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Product List</h1>
            <Grid container spacing={2} justifyContent="center">
                {arrProducts && arrProducts.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item.id}>
                        <Card sx={{ maxWidth: 345, backgroundColor: '#c62828' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <ProductToShow product={item} />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

