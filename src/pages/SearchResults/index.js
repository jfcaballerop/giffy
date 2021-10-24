import React from 'react'
import ListOfGifs from '../../components/ListOfGifs';

export default function SearchResults({ params }) {
    const { keyword } = params

    return (
        <div>
            <ListOfGifs keyword={keyword}></ListOfGifs>
        </div>
    )
}
