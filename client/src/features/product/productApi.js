import axios from 'axios'

const baseUrl = "http://localhost:4000/product"

export const fetchProducts = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const addProduct = async (newProduct) => {
    const response = await axios.post(baseUrl, newProduct)
    return response.data
}

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

export const updateProduct = async (product, id) => {
    console.log("id from api", id)
    debugger
    const response = await axios.put(`${baseUrl}/` + id, product)
    return response.data
}