/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import noImageIcon from '../assets/images/no-image-icon.png';

const API_URL = 'http://localhost:5000';

const ProductDetailsPage = () => {
    const [product, setProduct] = useState({});
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { id } = useParams();

    const getProduct = async () => {

        try {
            const response = await fetch(`${API_URL}/api/products/${id}`);
            console.log('response: ', response);

            const data = await response.json();
            console.log('Product: ', data);

            let errMsg

            if (!response.ok && data.message) {
                errMsg = data.message;
                setErrorMessage(errMsg);
            } else if (response.status === 500) {
                errMsg = response.statusText;
                setErrorMessage(errMsg);
            } else {
                setProduct(data);
            }


        } catch (err) {
            console.log('Error getting product: ', err)
        }

    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <h2 className='errMsg-heading'>{errorMessage}</h2>
            <div className='ProductDetailsPage'>


                <div className='productDetails-img-wrapper'>
                    {product.image_Url && <img src={product.image_Url} alt="product" className="productDetails-img" />}
                </div>
                <div className='productDetails-content'>
                    <h2>{product.name}</h2>
                    <p className='productDetails-para'>{product.description}</p>
                    {!errorMessage && <Link to='/products' className="productDetails-backlink" >Back to products  |</Link>}
                    {!errorMessage && <Link to={`/products/edit/${product.id}`} className="product-update-link">  Update Product</Link>}
                </div>

            </div>
        </>
    );
}

export default ProductDetailsPage;