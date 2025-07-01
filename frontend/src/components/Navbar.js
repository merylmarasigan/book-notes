import '../styling/Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='brown navbar'>
            <p className='site-name'>BookNotes</p>
            <div className='right-links'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/create' className='nav-link'>Write a Review</Link>

            </div>
           
        </div>
    );
}
 
export default Navbar;