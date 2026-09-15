import { products } from '../data/products';

function ProductList() {
    return (
        <div className="product-list">
            <h2>Lista Prodotti</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index} className="product-item">
                        <span className="product-name">{product.name}</span>
                        <span className="product-price">€ {product.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;