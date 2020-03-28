import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';


import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api'


export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    
    const history = useHistory();
    
    const ongID = localStorage.getItem('ongID');

   async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongID,
                },
               
            })

            history.push('/profile');
        }catch(error){
            alert('Erro ao Cadastrar um novo caso, tente novamente');
        }
    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastro novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                
                <Link className="backlink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Decrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input 
                        placeholder="Valor em Euros"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />


                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}