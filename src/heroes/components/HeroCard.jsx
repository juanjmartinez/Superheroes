import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const CharactersByHero = ({ alter_ego, characters }) => {
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {
    const navigate = useNavigate();

    const heroImageUrl = `/assets/images/${id}.jpg`;

    const onNavigateToCard = () => {
        navigate(`/hero/${id}`);
    }

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>

                    <div className='col-4'>
                        <img src={heroImageUrl} className='card-img' alt={superhero} />
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <button className='btn btn-outline-primary' onClick={onNavigateToCard}>
                                Ver
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}