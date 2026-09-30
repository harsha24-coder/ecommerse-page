import React, { useEffect, useState } from 'react'
import ProductCard from '../../component/ProductCard/ProductCard'
import './Products.css'

function Products() {

    let [products, setProducts] = useState([])

    function fetchData() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="products-content">

            {
                products.map((prod) => {
                    return (
                        <ProductCard
                            key={prod.id}
                            title={prod.title}
                            image={prod.image}
                            rate={prod.rating.rate}
                            price={prod.price}
                            category={prod.category}
                        />
                    )
                })
            }

        </div>
    )
}

export default Products