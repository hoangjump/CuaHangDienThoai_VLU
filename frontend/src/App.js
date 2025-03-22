import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';
import Search from './pages/Search';
import Category from './pages/Category';
import QuickView from './pages/QuickView';
import UpdateUser from './pages/UpdateUser';
import UpdateProduct from './pages/UpdateProduct';
import AdminAccounts from './pages/AdminAccounts';
import UserAccounts from './pages/UserAccounts';
import PlacedOrders from './pages/PlacedOrders';
import Messages from './pages/Messages';
import Products from './pages/Products';
import RegisterAdmin from './pages/RegisterAdmin';
import Dashboard from './pages/Dashboard';
import UpdateProfile from './pages/UpdateProfile';
import AdminHeader from './pages/AdminHeader';
import UserHeader from './pages/UserHeader';
import AdminLogout from './pages/AdminLogout';
import UserLogout from './pages/UserLogout';
import WishlistCart from './pages/WishlistCart';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/user-login" component={UserLogin} />
        <Route path="/user-register" component={UserRegister} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/shop" component={Shop} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/search" component={Search} />
        <Route path="/category/:category" component={Category} />
        <Route path="/quick-view/:id" component={QuickView} />
        <Route path="/update-user" component={UpdateUser} />
        <Route path="/update-product/:id" component={UpdateProduct} />
        <Route path="/admin-accounts" component={AdminAccounts} />
        <Route path="/user-accounts" component={UserAccounts} />
        <Route path="/placed-orders" component={PlacedOrders} />
        <Route path="/messages" component={Messages} />
        <Route path="/products" component={Products} />
        <Route path="/register-admin" component={RegisterAdmin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/update-profile" component={UpdateProfile} />
        <Route path="/admin-header" component={AdminHeader} />
        <Route path="/user-header" component={UserHeader} />
        <Route path="/admin-logout" component={AdminLogout} />
        <Route path="/user-logout" component={UserLogout} />
        <Route path="/wishlist-cart" component={WishlistCart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
