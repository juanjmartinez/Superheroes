import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import { getHeroesByName } from '../helpers/getHeroesByName';


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;


    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${searchText}`)

    }

    return (
        <>
            <h1>Buscar</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder='Buscar Heroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className='btn btn-outline-primary mt-1'>
                            Buscar
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    <div className='alert alert-primary animate__animated animate__fadeIn'
                        style={{ display: showSearch ? '' : 'none' }}>
                        Buscar Heroe
                    </div>

                    <div className='alert alert-danger animate__animated animate__fadeIn'
                        style={{ display: showError ? '' : 'none' }}>
                        No se encontró heroe con la descripción <b>{q}</b>
                    </div>


                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }

                </div>
            </div>

        </>
    )
}
