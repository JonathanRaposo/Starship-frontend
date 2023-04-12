
import { Link } from 'react-router-dom';
import getYear from '../utils/getYear';

const Footer = () => {

    return (
        <footer className='footer'>
            <ul>
                <li className='footer-link'>
                    <Link to='/'>Home</Link>
                </li>

                <li className='footer-link'>
                    <Link to='/products'>Products</Link>
                </li>

                <li className='footer-link'>
                    <Link to='/create'>Add Product</Link>
                </li>
            </ul>
            <p className='copy-right'> &copy; {getYear()} Raposo , Inc. All rights reserved </p>

        </footer>
    );
}

export default Footer;