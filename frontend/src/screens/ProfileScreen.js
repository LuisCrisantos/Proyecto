import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { detailsUser } from "../actions/userActions";
import MessageBox from '../components/MessageBox.js';
import LoadingBox from '../components/LoadingBox.js';

export default function ProfileScreen(){
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Perfil del usuario</h1>
                </div>
                {
                    loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox>
                    :
                    <>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input 
                                id="name" 
                                type="text" 
                                placeholder="Ingresar nombre" 
                                value={user.name}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input 
                                id="email" 
                                type="email" 
                                placeholder="Ingresar correo electrónico" 
                                value={user.email}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                id="password" 
                                type="confirm" 
                                placeholder="Ingresar contraseña" 
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmpassword">Confirmar contraseña</label>
                            <input 
                                id="confirmpassword" 
                                type="confirm" 
                                placeholder="Confirmar contraseña" 
                            ></input>
                        </div>
                        <div>
                            <label/>
                            <button className="primary" type="submit">Actualizar</button>
                        </div>
                    </>
                }
            </form>
        </div>
    )

}