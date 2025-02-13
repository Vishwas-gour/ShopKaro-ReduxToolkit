import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import "./css/card.css"
import StarAvg from './StarAvg';

function Cards() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
 
    let [allProducts, setAllProducts] = useState([]);
    const carts = useSelector((state) => state.cartSlice.cards);
    const productApi = `http://localhost:3000/products`;
    const dispatch = useDispatch();

    // =================[ INITIAL RENDER ]=================
    useEffect(() => {
        axios.get(productApi).
        then((res) =>setAllProducts(res.data)).
        catch((err) => console.error("Error:", err));

    }, []);


    // =============== SET DATA IN CART-API
    function addToCartFunction(data) {
        // check Cart
        let existingItem = carts.some(item => item.id === data.id);
        //  IF DATA IS ALREADY IN THE CART THEN RETURN HERE HERE
        if (existingItem) {
            alert("Product already in the cart!");
            return;
        }
        dispatch(addToCart(data));
        if (confirm("Item added to cart. Do you want to view the cart?")) navigate("/cart")
    }

    // =============== GET DATA FORM CLICKED EVENT
    async function getCardData(id) {
        const addDataApi = `http://localhost:3000/products/${id}`;
        const object = await axios.get(addDataApi);
        addToCartFunction(object.data)
    }

    // ======================={ RENDER PRODUCTS }========================= 
  
    function renderCard() {
        // input = "" = !input = true (it means first codition is true for all the products)
        // if input contains than return that produncs only
        
        return allProducts.filter(product => !search || product.names.toLowerCase().includes(search) ) 
            .map((product) => (
                <div key={product.id} className='card'>
                    <div className='card-img'>
                        <img src={product.imgUrl} alt={product.name}  onClick={() => navigate(`/detailedProduct/${product.id}`)}/>
                    </div>
                    <div className='card-body'>
                        <div className='card-title'>{product.name}</div>
                        <div className='card-text'>{product.about}</div>
                    </div>
                    <div className='avrageStar'><StarAvg id={product.id}/></div>
                    <div className='card-footer'>
                        <div className="card-price">₹ {product.price}</div>
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
            <div className='search-parent'>
                <input className="search-input" type="text" placeholder='Search Item' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
               
            </div>
            <div className='card-row container'>{renderCard("smart mobiles")}</div>


        </div>
    )
}
export default Cards;