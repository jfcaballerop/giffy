import React, { useEffect, useState } from 'react';
import { getGifs } from '../services/apisGifs';
import Gif from './Gif'

export default function ListOfGifs({ params }) {
    const { keyword } = params
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword])

    return (
        <div>
            {gifs.map(({ id, title, url }) => <Gif key={id} id={id} title={title} url={url} />)}
        </div>
    )
}
