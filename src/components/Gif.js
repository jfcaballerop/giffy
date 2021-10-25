import React from 'react'
import { Link } from 'wouter'

export default function Gif({ id, title, url }) {
    return (
        <>
            <Link to={`/detail/${id}`}>
                <span className='gif'>
                    <img alt={title} key={url} src={url} />
                </span>
            </Link>
            <h5 > {title} </h5>
        </>

    )
}
