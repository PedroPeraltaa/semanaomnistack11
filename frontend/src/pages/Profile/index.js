import React, {useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    const ongID = localStorage.getItem('ongID');
    const ongName = localStorage.getItem('ongName');


    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongID,
            }
        }).then(res => {
            setIncidents(res.data);
        })
    },[ongID]);


    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongID,
                }
            });
            setIncidents(incidents.filter(incidents => incidents.id !== id));
        }catch(error){
            alert('erro ao eliminar incidente');
        }
    }


    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="incident/new">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
                </header>
                <h1>Casos Listados</h1>

                <ul>
                  {incidents.map(incidents => (
                        <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>{incidents.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-PT', {style: 'currency', currency: 'EUR'}).format(incidents.value)}</p>

                        <button onClick={() => handleDeleteIncident(incidents.id)} type="button">
                            <FiTrash2 size={28} color="#a8a8b3"/>
                        </button>
                    </li>
                  ))}
                </ul>

         
        </div>
    )
}