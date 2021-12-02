import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../actions/cartActions';
import {Link} from 'react-router-dom';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    :1;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty));
        }
    }, [dispatch, productId, qty]);
    const removeFromCartHandler = (id) => {
        //accion eliminar
    }
    const checkoutHandler = () =>{
        props.history.push('/singin?redirect=shipping');
    }
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Carrito de compras</h1>
                {cartItems.length === 0? <MessageBox>
                    El carrito está vacío. <Link to="/">Ir a comprar</Link>
                </MessageBox>
                :
                (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img className="small" src={item.image} alt={item.name}></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select 
                                            value={item.qty} 
                                            onChange={e => 
                                                dispatch(
                                                    addToCart(item.product, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x+1} value={x+1}>
                                                    {x+1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>${item.price} MXN</div>
                                    <div>
                                        <button 
                                            type="button" 
                                            onClick={() => removeFromCartHandler(item.product)}
                                            >Eliminar</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a,c) => a+c.qty, 0)} items): 
                                ${cartItems.reduce((a,c) => a+c.price*c.qty,0)} MXN
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                                Proceder al pago
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
