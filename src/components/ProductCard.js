import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import noImage from '../assets/images/no-image-icon.png'

const API_URL = 'http://localhost:5000';



const ProductCard = ({ product, refreshProducts }) => {
    const [message, setMessage] = useState(undefined);

    const { id } = product;

    const deleteProduct = async () => {
        window.confirm('This action will delete this product from your list.');
        try {
            const response = await fetch(`${API_URL}/api/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Access-Control-Request-Headers': 'Content-Type',
                    'Access-Control-Request-Method': 'DELETE',

                }

            })
            console.log('Response: ', response)
        } catch (err) {
            console.log('Error Deleting product: ', err)
        }


    }


    return (
        <div className='product-container'>
            <div className='image-wrapper'>
                <Link to={`/products/${product.id}`} className="image-link">
                    {product.image_Url ? <img src={product.image_Url} alt="product" className="product-image" />
                        :
                        <img src={noImage} alt="product" className="product-image" />}

                </Link>
            </div>
            <div className='content-wrapper'>
                <h3 className='name-heading'>{product.name}</h3>
                <p className='product-price'><strong>Price:</strong> ${product.price}</p>
                <Link to={`/products/${product.id}`} className='details-link'>See details</Link>
                <button onClick={deleteProduct} className='delete-btn'>Delete</button>
                <p className='delete-message'>{message}</p>
            </div>

        </div>
    );
}

export default ProductCard;