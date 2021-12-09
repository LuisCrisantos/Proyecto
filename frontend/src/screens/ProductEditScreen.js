import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {detailsProduct} from '../actions/productActions.js';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';

export default function ProductEditScreen(props) {
    const productId = props.match.params.id;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');

    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        if(!product || product._id !== productId){
            dispatch(detailsProduct(productId));
        }else{
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setDescription(product.description);
        }
    }, [product, dispatch, productId]);
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Editar producto</h1>
                </div>
                {loading? (<LoadingBox></LoadingBox> )
                :
                error? (<MessageBox variant="danger">{error}</MessageBox>)
                :(
                <>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input id="name" type="text" placeholder="Ingresar nombre" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="price">Precio</label>
                        <input id="price" type="text" placeholder="Ingresar precio" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="imagen">Imagen</label>
                        <input id="imagen" type="text" placeholder="Ingresar imagen" value={image} onChange={(e) => setImage(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="category">Categoría</label>
                        <input id="category" type="text" placeholder="Ingresar categoria" value={category} onChange={(e) => setCategory(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="countInStock">Stock</label>
                        <input id="countInStock" type="text" placeholder="Ingresar stock" value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="description">Descripción</label>
                        <textarea id="description" rows="3" type="text" placeholder="Ingresar descripcion" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label></label>
                        <button className="primary" type="submit">Actualizar</button>
                    </div>

                </>)}
            </form>
        </div>
    )
}
