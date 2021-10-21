import React from 'react';
import { auth } from '../firebase/config.js';
import { useHistory } from 'react-router';

const BtnCloseSesion = () => {
    const history = useHistory();
    const closeSesion = async () => {
        try {
            await auth.signOut();
            //history.push('/home');
            history.push('/');
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <button className="btnClose" as="button" onClick={closeSesion} >
                <i className="fas fa-sign-out-alt"></i>Cerrar Sesión
            </button>
        </>
    );
}
export default BtnCloseSesion;