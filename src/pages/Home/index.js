import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'

const POPULAR_GIFS = ["matrix", "pepe", "españa"]
export default function Home() {
    const [keyword, setkeyword] = useState('');
    const [path, pushLocation] = useLocation()


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
            <h3>Gifs populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popGif) => (
                        <li key={popGif}>
                            <Link to={`/search/${popGif}`}>{popGif}</Link>
                        </li>
                    )
                    )
                }
            </ul>
        </>
    )
}
