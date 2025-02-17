import { Modal } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png'
import './css/nav.css'
import { useSelector, useDispatch } from 'react-redux';

// ============> LOGO'S
import { MdOutlineLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { PiNotePencilDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { currentUserInfo, removeAllFromCart } from "../Redux/CartSlice";
function MyNav() {
    // only for find length;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let cart = useSelector(state => state.cartSlice.cards);
    let currentUser = useSelector(state => state.cartSlice.currentUser);
    const gmail = currentUser?.gmail || "Login";
    const address = currentUser?.address || "Address";
    const name = currentUser?.name || "Login";

    function logout() {
        if(gmail !== "Login"){
            Modal.confirm({
                title: "Logout",
                content: "Are you sure you want to log out?",
                onOk() {
                    dispatch(currentUserInfo(null))
                    dispatch(removeAllFromCart())
                }
            });
            return;
        }
        else {
            Modal.confirm({
                title: "Login",
                onOk() {
                    navigate('/login');
                }
            });
        }
       
    }

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

                </ul>
                <ul className='nav-item right'>
                    <Link ><div><MdOutlineLocationOn /> {address} <PiNotePencilDuotone /></div></Link> |
                    <Link ><div onClick={logout} ><CgProfile /> {name}</div></Link> |
                    <Link to="cart"><div><FaShoppingCart /> {cart.length}</div></Link>

                </ul>
            </div>

        </>
    )
}

export default MyNav