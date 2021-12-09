import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { detailsUser, updateUserProfile } from "../actions/userActions";
import MessageBox from '../components/MessageBox.js';
import LoadingBox from '../components/LoadingBox.js';
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

export default function ProfileScreen(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate,
    } = userUpdateProfile;
    const dispatch = useDispatch();
    useEffect(() => {
        if(!user){
            dispatch({type: USER_UPDATE_PROFILE_RESET});
            dispatch(detailsUser(userInfo._id));
        }else{
            setName(user.name);
            setEmail(user.email);
        }        
    }, [dispatch, userInfo._id, user]);
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword){
            alert('Las contraseñas no coinciden');
        }else{
            dispatch(updateUserProfile({userId: user._id, name, email, password}));
        }
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Perfil del usuario</h1>
                </div>
                {
                    loading ? (<LoadingBox></LoadingBox>)
                    :
                    error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    :
                    <>
                        {loadingUpdate && <LoadingBox></LoadingBox>}
                        {errorUpdate && (
                            <MessageBox variant="damger">{errorUpdate}</MessageBox>
                        )}
                        {successUpdate && <MessageBox variant="success">Perfil actualizado con éxito</MessageBox>}
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input 
                                id="name" 
                                type="text" 
                                placeholder="Ingresar nombre" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input 
                                id="email" 
                                type="email" 
                                placeholder="Ingresar correo electrónico" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                id="password" 
                                type="password" 
                                placeholder="Ingresar contraseña" 
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmpassword">Confirmar contraseña</label>
                            <input 
                                id="confirmpassword" 
                                type="password" 
                                placeholder="Confirmar contraseña" 
                                onChange={(e) => setConfirmPassword(e.target.value)}
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