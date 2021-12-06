import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {register} from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const {userInfo, loading, error} = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Las contraseñas no coinciden');
        }else{
            dispatch(register(name, email, password)); 
        }  
    };
    useEffect(() =>{
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div><h1>Crear cuenta</h1></div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Ingresar nombre"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresar correo electrónico"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingresar contraseña"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmar contraseña</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirmar Contraseña"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">
                        Registrarse
                    </button>
                </div>
                <div>
                    <label/>
                    <div>
                        ¿Ya tiene una cuenta? <Link to={`/signin?redirect=${redirect}`}>Iniciar sesión</Link>
                    </div> 
                    <label/>   
                </div>
            </form>
        </div>
    )
}
