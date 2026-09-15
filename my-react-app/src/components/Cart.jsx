function Cart({ addedProducts, onRemove }) {
    if (addedProducts.length === 0) {
        return null;
    }

    //Totale = somma di (prezzo × quantità)
    const total = addedProducts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart">
            <h2>Carrello</h2>
            <ul>
                {addedProducts.map((item) => (
                    <li key={item.name} className="cart-item">
                        <span className="cart-name">{item.name}</span>
                        <span className="cart-price">€ {item.price.toFixed(2)}</span>
                        <span className="cart-quantity">x{item.quantity}</span>
                        <button onClick={() => onRemove(item.name)}>
                            Rimuovi dal carrello
                        </button>
                    </li>
                ))}
            </ul>

            <div className="cart-total">
                <strong>Totale: € {total.toFixed(2)}</strong>
            </div>
        </div>
    );
}

export default Cart;