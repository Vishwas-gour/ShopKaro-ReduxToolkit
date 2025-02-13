import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increQuantity, decreQuantity } from '../Redux/CartSlice'
import "./css/cart.css"


function Cart() {
    const carts = useSelector((state) => state.cartSlice.cards);
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);
    const [priceCalcu, setPriceCalulation] = useState({});
    const navigate = useNavigate();
    let cartApi = `http://localhost:3000/cart`;
    // =================[ INITIAL RENDER ]=================
    function renderCarts() {
        axios.get(cartApi).then((res) =>setCart(res.data))
        .catch((err) => console.error("Error => ", err));
    }

    useEffect(() => {
        renderCarts();
    }, []);



    // ======================={ handleQuantity() } ============
    function handleQuantity(index, condition) {
        (condition) ? (dispatch(increQuantity(index))) : (dispatch(decreQuantity(index)))
    }

    // ======================={ SET PRODUCTS }========================= 
    let totalPrize = 0;
    let totalProducts = 0;
    let sections = function () {
        
        return carts.map((key, index) => (
            <>
                <div style={{ display: "none" }}>{totalProducts++}{totalPrize += key.price * key.quantity}</div>
                <div className='cart-card-row'>
                    <div className='cart-cards'>
                        <div className='first-div part'>
                            <img src={key.imgUrl} alt="" />
                        </div>
                        <div className='second-div part'>
                            <div className='card-title'><h3>{key.name}</h3></div>
                            <div className='card-text'>{key.about}</div>
                            <div className="cart-card-price"><h4>INR {(key.price * key.quantity).toFixed(2)}</h4></div>
                        </div>

                        <div className="third-div part">
                            <div className='quantity'>
                                <button id={key.id} className='update-quantity' onClick={(e) => handleQuantity(index, false)}>➖</button>
                                <button type="number" >item {key.quantity}</button>
                                <button id={key.id} className='update-quantity' onClick={(e) => handleQuantity(index, true)}>➕</button>
                            </div>
                            <button className='cart-btn remove' id={key.id} onClick={(e) => removeItem(e.target.id)}>Remove</button>
                            <button style={{ background: "rgb(129, 129, 234)" }} onClick={() => navigate(`/payment/${key.id}`)} >Buy-Product</button>
                            <button style={{ background: "rgb(234, 225, 129)", color: "black" }} onClick={() => navigate(`/detailedProduct/${key.id}`)}>More... </button>
                        </div>
                    </div>
                </div>
            </>
        ));
    }


    // ========================[ Remove item form cart ]=============
    function removeItem(id) {
        if (!confirm("do you want to remove Item")) {
            return;
        }
      dispatch(removeFromCart(id))
    }
    let product = sections();
    totalPrize = totalPrize.toFixed(2); // for taking 2 digits after decimal

    // ========================[ Calculation of Price Detail ]=================
    //==> when any item remove or quantity the price update and this useEffect render on that
    useEffect(() => {
        totalPrize = parseFloat(totalPrize).toFixed(2);
        totalProducts = parseFloat(totalProducts).toFixed(2);
        let discount = parseFloat(totalPrize * 0.1).toFixed(2);
        let deliveryCharges = parseFloat(totalPrize * 0.01).toFixed(2);
        let priceAfterDiscount = (parseFloat(totalPrize - discount + +(deliveryCharges))).toFixed(2);
        let platformFee = Number(totalPrize * 0.02).toFixed(2);

        if (platformFee > 10) platformFee = 9.76
        setPriceCalulation(
            {
                totalPrize: totalPrize,
                totalProducts: totalProducts,
                discount: discount,
                deliveryCharges: deliveryCharges,
                priceAfterDiscount: priceAfterDiscount,
                platformFee: platformFee
            })
    }, [totalPrize]);

    return (
        <>
            <div className='container'>
                <div className='carts-container'>
                    <div className='cart-product'>
                        {/* CART DATA */}
                        {product}
                    </div>
                    <div className='price-detail'>
                        <h2>Price detail</h2>
                        <div className='detail'>
                            <div>Price ({totalProducts})</div>
                            <div>₹{totalPrize.toLocaleString('en-IN')}</div>
                        </div>
                        <div className='detail'>
                            <div>Discount</div>
                            <div>₹{priceCalcu.discount}</div>
                        </div>
                        <div className='detail'>
                            <div>Platform fee</div>
                            <div>₹{priceCalcu.platformFee}</div>
                        </div>

                        <div className='detail'>
                            <div>Delivery Charges</div>
                            <div>₹{priceCalcu.deliveryCharges}</div>
                        </div>

                        <div className='detail'>
                            <div>total Amount</div>
                            <div >₹{priceCalcu.priceAfterDiscount}</div>
                        </div>
                        <div className='detail' style={{ color: "yellow" }}>You will save ₹{priceCalcu.discount} on this order</div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart