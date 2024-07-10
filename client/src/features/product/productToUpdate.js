import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { useForm } from "react-hook-form"
import { updateProductToShow } from "./productSlice"


export default function ProductToUpdate() {

    const index = useParams().index
    const allProducts = useSelector(x => x.product.arrProduct)
    const product = allProducts[index]
    const { register, handleSubmit } = useForm()
    const dis = useDispatch()
    const nav = useNavigate()

    const submit = async (data) => {
        await dis(updateProductToShow({ product: data, id: product.id }))
        nav("/products")
    }




    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>update product</h1>
            <form onSubmit={handleSubmit(submit)}>
                <input defaultValue={product.name} {...register("name", { required: true })} ></input>
                <input defaultValue={product.description} {...register("description", { required: true })} ></input>
                <input defaultValue={product.content} {...register("content", { required: true })} ></input>
                <input defaultValue={product.price} {...register("price", { required: true })} ></input>
                <input defaultValue={product.isCooling} {...register("isCooling", { required: true })} ></input>
                <input defaultValue={product.company} {...register("company", { required: true })} ></input>
                <input defaultValue={product.prodDate} {...register("prodDate", { required: true })} ></input>
                <input defaultValue={product.qty} {...register("qty", { required: true })} ></input>
                <input type="submit" value="update product"></input>
            </form>


        </div>
    )
}