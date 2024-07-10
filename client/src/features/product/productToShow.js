import { useNavigate } from "react-router"
export default function ProductToShow({ product }) {
    const nav = useNavigate()

    return (
        <div onClick={() => { nav('/prodactDetails/' + product.id) }} style={{ textAlign: 'center' }}>
            <h2> {product.name}</h2>
            <p>price: {product.price}</p>
            <h5>*click me</h5>

        </div>
    )
}



