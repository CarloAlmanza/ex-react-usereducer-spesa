import { useState } from 'react';
import { products } from '../data/products';
import Cart from './Cart';

function ProductList() {
    const [addedProducts, setAddedProducts] = useState([]);

    function addToCart(product) {
        // Controllo se il prodotto è già nel carrello
        const alreadyInCart = addedProducts.some(
            (item) => item.name === product.name
        );

        if (alreadyInCart) {
            return; // ignora l'azione
        }

        // Aggiungo il prodotto con quantity = 1
        setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }

    return (
        <div className="product-list">
            <h2>Lista Prodotti</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.name} className="product-item">
                        <span className="product-name">{product.name}</span>
                        <span className="product-price">€ {product.price.toFixed(2)}</span>
                        <button onClick={() => addToCart(product)}>
                            Aggiungi al carrello
                        </button>
                    </li>
                ))}
            </ul>

            <Cart addedProducts={addedProducts} />
        </div>
    );
}

export default ProductList;