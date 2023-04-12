import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import drone from '../assets/images/drone_1.png';


const API_URL = 'http://localhost:5000';


const AddProductPage = () => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // const [ErrorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = {
            image_Url: image,
            name,
            description,
            price
        }


        try {
            const response = await fetch(`${API_URL}/api/products`, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            })

            console.log('Response:', response)

            setImage('')
            setName('')
            setDescription('');
            setPrice('')
            navigate('/products')

        } catch (err) {
            console.log('Error creating product: ', err)
        }
    }

    return (
        <div className="AddProductPage">
            <h3 className="addProduct-heading">Add Product</h3>
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
                <button type="submit" className="addProduct-btn">Add</button>
                {/* <p className="error-message">{ErrorMessage}</p> */}
            </form>
        </div>
    );
}


export default AddProductPage;