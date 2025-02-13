/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import StarAvg  from '../Components/StarAvg'

function Category() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [select, setSelect] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const carts = useSelector((state) => state.cartSlice.cards);
    const productApi = `http://localhost:3000/products`;
    const dispatch = useDispatch();

    // =================[ INITIAL RENDER ]=================
    useEffect(() => {
        axios.get(productApi).then((res) =>setAllProducts(res.data))
        .catch((err) => console.error("Error fetching products:", err));

    }, []);


    // =============== SET DATA IN CART-API
    function addToCartFunction(data) {
        let existingItem = carts.some(item => item.id === data.id);
        if (existingItem) {
            alert("Product already exist in the cart ");
            return;
        }
        dispatch(addToCart(data));
        if (confirm("data added View card")) navigate("/cart")
    }

    // =============== GET DATA FORM CLICKED EVENT
    async function getCardData(id) {
        const addDataApi = `http://localhost:3000/products/${id}`;
        const object = await axios.get(addDataApi);
        console.log(object.data)
        addToCartFunction(object.data)
    }

    // ======================={ SET PRODUCTS }========================= 
function renderCard() {
    return allProducts
        .filter(product => (!input || product.names.toLowerCase().includes(input)) && (!select || product.category.toLowerCase().includes(select)))
        .map((product) => (
            <div className='card' product={product.id}>
                <div className='card-img'>
                    <img src={product.imgUrl} alt=""  onClick={() => navigate(`/detailedProduct/${product.id}`)} />
                </div>
                <div className='card-body'>
                    <div className='card-title'>{product.name}</div>
                    <div className='card-text'>{product.about}</div>
                </div>
                <div className='avrageStar'><StarAvg id={product.id}/></div>
                <div className='card-footer'>
                    <div className="card-price">INR {product.price}</div>
                    <div className="add-to-cart">
                        <button id={product.id} onClick={(e) => getCardData(e.target.id)} className='cart-btn'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        ));
}



    return (
        <div className='container'>
            {select?(<h1>
                {select.charAt(0).toLocaleUpperCase()+select.substring(1)}
            </h1>):(
                <>
                </>
            )}
            <div className='search-parent'>
                <input className="search-input" type="text" placeholder='Search Item' value={input} onChange={(e) => setInput(e.target.value.toLowerCase())} />
                <select className="search-input"  onChange={(e) => setSelect(e.target.value)} value={select}>
                    <option value="">Select Catogery</option>
                    <option value="smart watch">Smart Watch</option>
                    <option value="smart mobiles">Smart Mobiles</option>

                </select>
            </div>
            <div className='card-row container'>{renderCard()}</div>


        </div>
    )
}
export default Category;