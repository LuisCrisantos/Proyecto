import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
            <div >
                <Link className="brand" to="/">Genki Co.</Link>
            </div>
            <div>
                <Link to="/cart">Carrito
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}</Link>
                {userInfo && userInfo.isAdmin && (
                  <div className="dropdown">
                    <Link to="#admin">
                      Admin <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-content">
                      <li><Link to="/dashboard">Dashboard</Link></li>
                      <li><Link to="/productlist">Productos</Link></li>
                      <li><Link to="/orderlist">??rdenes</Link></li>
                      <li><Link to="/userlist">Usuarios</Link></li>
                    </ul>
                  </div>
                )}
                {
                  userInfo ? (
                    <div className="dropdown">
                      <Link to="#">
                        {userInfo.name}<i className="fa fa-caret-down"></i> {' '}
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="profile">Perfil</Link>
                        </li>
                        <li>
                          <Link to="/orderhistory">Historial</Link>
                        </li>  
                        <li>
                          <Link to="#signout" onClick={signoutHandler}>
                          Cerrar sesi??n
                          </Link>
                        </li> 
                      </ul>
                    </div>
                  ) :
                  (<Link to="/signin">Iniciar sesi??n</Link>)
                }
                   
            </div>
        </header>
        <main>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
            <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/shipping" component={ShippingAddressScreen}></Route>
            <Route path="/payment" component={PaymentMethodScreen}></Route>
            <Route path="/placeorder" component={PlaceOrderScreen}></Route>
            <Route path="/order/:id" component={OrderScreen}></Route>
            <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
            <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
            <AdminRoute path="/productlist" component={ProductListScreen}></AdminRoute>
            <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
            Todos los derechos reservados.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
