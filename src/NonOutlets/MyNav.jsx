
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png'
import './css/nav.css'
import { MdOutlineLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { PiNotePencilDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
// import video from '../img/delivery_boy.mp4';
function MyNav() {

    let cart = useSelector(state => state.cartSlice.cards);
    let cartLength = cart.length;
    return (
        <>
            <div className='logo'><img src={logo} alt="Website Logo" /> </div>
            <div className='my-nav'>
                <ul className='nav-item left'>
                    <Link to="home">Home</Link> |
                    <Link to="category">Category</Link> |
                    <Link to="cart">Cart</Link>
                </ul>
                <ul className='nav-item center'>
                    {/* <video className='video' autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                    </video> */}
                </ul>
                <ul className='nav-item right'>
                    <Link ><div><MdOutlineLocationOn /> Bhopal,462003  <PiNotePencilDuotone /></div></Link> |
                    <Link ><div><CgProfile /> Vishwas Gour </div></Link> |
                    <Link to="cart"><div><FaShoppingCart /> {cartLength}</div></Link>

                </ul>
            </div>

        </>
    )
}

export default MyNav