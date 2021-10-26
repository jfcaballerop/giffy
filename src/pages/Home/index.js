import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import Spinner from '../../components/Spinner';
import ListOfGifs from '../../components/ListOfGifs';
import Category from '../../components/Category';
import TrendingSearches from '../../components/TrendingSearches';

const POPULAR_GIFS = ["matrix", "pepe", "españa"]
export default function Home() {
    const [keyword, setkeyword] = useState('');
    const [path, pushLocation] = useLocation()

    const { loading, gifs } = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar ruta
        console.log(keyword);
        pushLocation(`/search/${keyword}`)

    }

    const handleChange = evt => {
        setkeyword(evt.target.value)
    }

    return (
        <>
            <h1>APP GIFYs</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='search gif ...' onChange={handleChange} type='text' value={keyword}></input>
            </form>
            <h3>last search</h3>
            <div>
                {
                    loading ? <Spinner></Spinner> : <ListOfGifs gifs={gifs}></ListOfGifs>
                }
            </div>
            <TrendingSearches></TrendingSearches>
        </>
    )
}
