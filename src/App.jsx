
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './Layout';
import Home from "./Components/Home.jsx"
import NotFound from './Pages/NotFound.jsx';
import Cart from "./Pages/Cart.jsx"
import Payment from './Pages/Payment.jsx';
import Category from './Pages/Category.jsx'
import DetailedProduct from './Pages/DetailedProduct.jsx';
import Popup from './Pages/Popup.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="cart" element={<Cart />} />
          <Route path="detailedProduct/:id" element={<DetailedProduct />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="popup" element={<Popup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App;