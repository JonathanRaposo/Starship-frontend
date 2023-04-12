/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import axios from 'axios';




const API_URL = 'http://localhost:5000';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const getProducts = async () => {
        try {
            const response = await fetch(`${API_URL}/api/products`);
            const products = await response.json();
            console.log('response: ', response)
            setProducts(products);
            console.log(products)

        } catch (err) {
            console.log('Error getting products: ', err)
        }


    }
    useEffect(() => {
        getProducts();
    }, [])


    const filteredProduct = products.filter((p) => {
        return p.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const sortByLowest = () => {
        const products_copy = [...products]
        const lowerPrice = products_copy.sort((a, b) => {
            if (b.price > a.price) {
                return -1;
            } else {
                return 1;
            }
        })
        setProducts(lowerPrice);
    }
    const sortByHighest = () => {
        const products_copy = [...products];
        const highestPrice = products_copy.sort((a, b) => {
            if (a.price > b.price) {
                return -1
            } else {
                return 1;
            }
        })
        setProducts(highestPrice)
    }
    return (
        <div className="ProductsPage">
            <div className='products-hero'>
                <SearchBar handleSearch={setSearchTerm} sortByLowest={sortByLowest} sortByHighest={sortByHighest} />

            </div>

            {filteredProduct.map((p) => <ProductCard key={p.id} product={p} refreshProducts={getProducts} />)}
        </div>
    );
}

export default ProductsPage;