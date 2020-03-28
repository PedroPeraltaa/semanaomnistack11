import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="incident/new">
                    Cadastrar novo caso
                </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
                </header>
                <h1>Casos Listados</h1>

                <ul>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso Teste</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>teste</p>
                        <strong>VALOR:</strong>
                        <p>20€</p>

                        <button type="button">
                            <FiTrash2 size={28} color="#a8a8b3"/>
                        </button>
                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso Teste</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>teste</p>
                        <strong>VALOR:</strong>
                        <p>20€</p>

                        <button type="button">
                            <FiTrash2 size={28} color="#a8a8b3"/>
                        </button>
                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso Teste</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>teste</p>
                        <strong>VALOR:</strong>
                        <p>20€</p>

                        <button type="button">
                            <FiTrash2 size={28} color="#a8a8b3"/>
                        </button>
                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso Teste</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>teste</p>
                        <strong>VALOR:</strong>
                        <p>20€</p>

                        <button type="button">
                            <FiTrash2 size={28} color="#a8a8b3"/>
                        </button>
                    </li>
                </ul>

         
        </div>
    )
}