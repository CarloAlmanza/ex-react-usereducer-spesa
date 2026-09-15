import { useReducer } from 'react';
import { products } from '../data/products';
import { cartReducer, initialState } from '../reducers/cartReducer';
import Cart from './Cart';

function ProductList() {
    const [addedProducts, dispatch] = useReducer(cartReducer, initialState);

    //Dispatch di ADD_ITEM
    function addToCart(product) {
        dispatch({ type: 'ADD_ITEM', payload: product });
    }

    //Dispatch di UPDATE_QUANTITY
    function updateProductQuantity(productName, newQuantity) {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { name: productName, quantity: newQuantity },
        });
    }

    //Dispatch di REMOVE_ITEM
    function removeFromCart(productName) {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: { name: productName },
        });
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
                onUpdateQuantity={updateProductQuantity}
            />
        </div>
    );
}

export default ProductList;