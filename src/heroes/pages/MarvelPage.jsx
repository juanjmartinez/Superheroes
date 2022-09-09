import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {
    return (
        <>
            <hr />
            <h1>My Favorite Marvel Characters</h1>
            <hr />

            <HeroList publisher='Marvel Comics' />
        </>
    )
}
