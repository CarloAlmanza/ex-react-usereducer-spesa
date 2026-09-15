function Cart({ addedProducts }) {
    if (addedProducts.length === 0) {
        return null; // non mostrare nulla se il carrello è vuoto
    }

    return (
        <div className="cart">
            <h2>🛒 Carrello</h2>
            <ul>
                {addedProducts.map((item) => (
                    <li key={item.name} className="cart-item">
                        <span className="cart-name">{item.name}</span>
                        <span className="cart-price">€ {item.price.toFixed(2)}</span>
                        <span className="cart-quantity">x{item.quantity}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;