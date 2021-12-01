import React from 'react'

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    :1;
    
    return (
        <div>
            <h1>Pantalla del carrito</h1>      
            <p>
                AÑADIR AL CARRITO: ID DEL PRODUCTO: {productId} Qty:{qty}
            </p>
        </div>
    );
}
