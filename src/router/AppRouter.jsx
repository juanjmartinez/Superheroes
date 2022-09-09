import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroPage } from '../heroes/pages/HeroPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { SearchPage } from '../heroes/pages/SearchPage'
import { Navbar } from '../ui/components/Navbar'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
