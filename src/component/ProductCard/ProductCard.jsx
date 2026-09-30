import React from 'react'
import './ProductCard.css'

function ProductCard({ title, image, rate, price, category }) {

    return (
        <div className="product-card">

            <div className="product-image">
                <img src={image} alt={title} />
            </div>

            <div className="product-info">

                <p className="product-category">
                    {category}
                </p>

                <h2>{title}</h2>

                <p className="product-price">
                    ${price}
                </p>

                <p className="product-rating">
                    ⭐ {rate}
                </p>

                <button className="product-button">
                    Add to Cart
                </button>

            </div>

        </div>
    )
}

export default ProductCard