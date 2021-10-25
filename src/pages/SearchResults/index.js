import React, { useEffect, useState } from 'react'
import ListOfGifs from '../../components/ListOfGifs';
import Spinner from '../../components/Spinner';
import { getGifs } from '../../services/apisGifs';

export default function SearchResults({ params }) {
    const { keyword } = params
    const [gifs, setGifs] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true)
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs)
            setloading(false)
        }
        )
    }, [keyword])

    return (
        <div>
            {
                loading ? <Spinner></Spinner> : <ListOfGifs gifs={gifs}></ListOfGifs>
            }
        </div>
    )
}
