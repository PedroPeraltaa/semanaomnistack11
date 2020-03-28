import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { FiLogIn } from 'react-icons/fi';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>
                
                    <Link className="backlink" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho conta
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}