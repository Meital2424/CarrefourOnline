

export default function OrderToShow({ order }) {
    return (
        <div>
            <p>orderDate: {order.orderDate}</p>
            <p>dueDate: {order.dueDate}</p>
            <p>total price:{(order.shoppingCart && order.shoppingCart.length > 0) ? (order.shoppingCart.reduce((sum, item) => sum + item.count * item.price, 0)) : 0}</p>

        </div>
    )
}