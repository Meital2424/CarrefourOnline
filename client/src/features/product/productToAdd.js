import * as React from 'react';
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

import { addNewProduct, updateProductToShow } from "./productSlice"

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';


export default function ProdactToAdd() {

    const { register, handleSubmit } = useForm()
    const dis = useDispatch()
    const nav = useNavigate();

    const submit = async (data) => {
        await dis(addNewProduct(data))
        // ניסיתי להחזיר אותו לרשימת המוצרים, ולא עבד
        // nav("/products")


    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>add product</h1>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '70vh'
                }}
            >
                <form onSubmit={handleSubmit(submit)} style={{ textAlign: 'center' }}>
                    <p>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="name">name</InputLabel>
                            <OutlinedInput
                                id="name"
                                {...register("name", { required: true })}
                                label="name"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="description">description</InputLabel>
                            <OutlinedInput
                                id="description"
                                {...register("description", { required: true })}
                                label="description"
                            />
                        </FormControl>
                    </p>

                    <p>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="content">content</InputLabel>
                            <OutlinedInput
                                id="content"
                                {...register("content", { required: true })}
                                label="content"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="price">price</InputLabel>
                            <OutlinedInput
                                id="price"
                                {...register("price", { required: true })}
                                label="price"
                            />
                        </FormControl>
                    </p>

                    <p>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="isCooling">isCooling</InputLabel>
                            <OutlinedInput
                                id="isCooling"
                                {...register("isCooling", { required: true })}
                                label="isCooling"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="company">company</InputLabel>
                            <OutlinedInput
                                id="company"
                                {...register("company", { required: true })}
                                label="company"
                            />
                        </FormControl>
                    </p>

                    <p>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="prodDate">prodDate</InputLabel>
                            <OutlinedInput
                                id="prodDate"
                                {...register("prodDate", { required: true })}
                                label="prodDate"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="qty">qty</InputLabel>
                            <OutlinedInput
                                id="qty"
                                {...register("qty", { required: true })}
                                label="qty"
                            />
                        </FormControl>
                    </p>

                    <Stack marginLeft="11vw" marginTop="5vh" direction="row" >
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#283593',
                                color: 'white',
                            }}
                            onClick={handleClick}
                        >
                            add product
                        </Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={1000}
                            onClose={handleClose}
                            message="The product was added successfully!"
                        />
                    </Stack>
                </form>
            </Box>

        </div>
    )

}