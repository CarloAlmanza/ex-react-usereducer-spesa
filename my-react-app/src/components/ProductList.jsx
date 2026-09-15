import { useState } from 'react';
import { products } from '../data/products';
import Cart from './Cart';

function ProductList() {
    const [addedProducts, setAddedProducts] = useState([]);

    // Aggiunge o incrementa
    function addToCart(product) {
        const existing = addedProducts.find(item => item.name === product.name);

        if (existing) {
            updateProductQuantity(product.name, existing.quantity + 1);
        } else {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        }
    }

    //Imposta la quantità di un prodotto (con validazione)
    function updateProductQuantity(productName, newQuantity) {
        // 1. Forza intero (via parseInt, scarta decimali)
        let qty = parseInt(newQuantity, 10);

        // 2. Se non è un numero valido (es. input svuotato), ignora
        if (isNaN(qty)) return;

        // 3. Non permettere valori < 1
        if (qty < 1) qty = 1;

        // 4. Aggiorna lo stato in modo immutabile
        setAddedProducts(
            addedProducts.map(item =>
                item.name === productName
                    ? { ...item, quantity: qty }
                    : item
            )
        );
    }

    //Rimuove un prodotto
    function removeFromCart(productName) {
        setAddedProducts(
            addedProducts.filter(item => item.name !== productName)
        );
    }

    return (
        <div className="product-list">
            <h2>Lista Prodotti</h2>
            <ul>
                {products.map(product => (
                    <li key={product.name} className="product-item">
                        <span className="product-name">{product.name}</span>
                        <span className="product-price">€ {product.price.toFixed(2)}</span>
                        <button onClick={() => addToCart(product)}>
                            Aggiungi al carrello
                        </button>
                    </li>
                ))}
            </ul>

            <Cart
                addedProducts={addedProducts}
                onRemove={removeFromCart}
                onUpdateQuantity={updateProductQuantity}
            />
        </div>
    );
}

export default ProductList;