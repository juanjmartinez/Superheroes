import React from 'react'
import { HeroCard } from '../components/HeroCard'

export const SearchPage = () => {
    return (
        <>
            <h1>Buscar</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <form>
                        <input
                            type="text"
                            placeholder='Buscar Heroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                        />
                        <button className='btn btn-outline-primary mt-1'>
                            Buscar
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    <div className='alert alert-primary'>
                        Buscar Heroe
                    </div>

                    <div className='alert alert-danger'>
                        No se encontró heroe
                    </div>

                    <HeroCard />

                </div>
            </div>

        </>
    )
}
