import React, { useContext } from 'react'
import Gif from 'components/Gif';
import GifsContext from 'context/GifsContext';


export default function Detail({ params }) {


    const { gifs } = useContext(GifsContext)
    console.log(gifs);
    const gif = gifs.find(singlegif => singlegif.id === params.id)
    console.log(gif);
    return (
        <>
            <h1>
                GIF con id {params.id}
            </h1>
            <Gif {...gif}></Gif>
        </>
    )
}
