
import { Link } from 'react-router-dom';
import spaceship from '../assets/images/spaceShip.png';


const Navbar = () => {
    return (
        <nav>
            <Link to='/' className='logo-link'>
                <div className='logo-wrapper'>
                    <img src={spaceship} alt='spaceship' className='spaceship-logo' />
                    <p>Starship</p>
                </div>
            </Link>
            <ul>
                <li className='nav-link'>
                    <Link to='/'>Home</Link>
                </li>

                <li className='nav-link'>
                    <Link to='/products'>Products</Link>
                </li>
                <li className='nav-link'>
                    <Link to='/create'>Add Product</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;