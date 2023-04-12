/* eslint-disable react-hooks/exhaustive-deps */

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import drone from '../assets/images/drone_1.png';
import axios from 'axios';

const API_URL = 'http://localhost:5000';



const EditProductPage = () => {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [ErrorMessage, setErrorMessage] = useState(undefined);

    const { id } = useParams();
    const navigate = useNavigate();

    const getProduct = async () => {
        let errMsg;
        try {
            const response = await axios.get(`${API_URL}/api/products/${id}`);
            console.log('Response: ', response);
            const product = response.data;
            setImage(product.image_Url);
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);


        } catch (err) {
            console.log('Error updating product: ', err);
            if (err.response.status === 404 && err.response.data.message) {
                errMsg = err.response.data.message;
                setErrorMessage(errMsg);
            } else if (err.response.status === 400 && err.response.data.message) {
                errMsg = err.response.data.message;
                setErrorMessage(errMsg);
            } else {
                errMsg = err.response.statusText;
                setErrorMessage(errMsg);
            }

        }

    }

    useEffect(() => {
        getProduct();
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = {
            image_Url: image,
            name,
            description,
            price
        }

        try {
            const response = await fetch(`${API_URL}/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Access-Control-Request-Headers': 'Content-Type',
                    'Access-Control-Request-Method': 'PUT'
                },
                body: JSON.stringify(requestBody)
            });


            console.log('response: ', response);
            const data = response.data;
            navigate(`/products/${id}`);
            console.log('data: ', data);

        } catch (err) {
            console.log('Error updating product:', err);
            if (err.code === 'ERR_NETWORK') {
                let errMgs = err.message;
                setErrorMessage(errMgs);
            }
        }

    }




    return (
        <div className='EditProductPage'>
            <h3 className="editProduct-heading">Edit Product</h3>
            <form onSubmit={handleSubmit} className='addProduct-form'>
                <img src={drone} alt='drone icon' className="drone-icon" />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    placeholder='Insert image URL'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}

                />

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    name="description"
                    id="description"
                    rows="4"
                    cols="38"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}

                />
                <label htmlFor="price">Price</label>
                <input
                    className="price-field"
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}

                />
                <button type="submit" className="editProduct-btn">Update</button>
                <p className="error-message">{ErrorMessage}</p>
            </form>
        </div>
    );
}



export default EditProductPage;