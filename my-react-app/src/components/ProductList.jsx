import { useState } from 'react';
import { products } from '../data/products';
import Cart from './Cart';

function ProductList() {
    const [addedProducts, setAddedProducts] = useState([]);

    // Aggiunge il prodotto o incrementa la quantità
    function addToCart(product) {
        const alreadyInCart = addedProducts.some(
            (item) => item.name === product.name
        );

        if (alreadyInCart) {
            updateProductQuantity(product.name);
        } else {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        }
    }

    //Incrementa la quantità di un prodotto esistente
    function updateProductQuantity(productName) {
        setAddedProducts(
            addedProducts.map((item) =>
                item.name === productName
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    //Rimuove un prodotto dal carrello
    function removeFromCart(productName) {
        setAddedProducts(
            addedProducts.filter((item) => item.name !== productName)
        );
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

            <Cart
                addedProducts={addedProducts}
                onRemove={removeFromCart}
            />
        </div>
    );
}

export default ProductList;