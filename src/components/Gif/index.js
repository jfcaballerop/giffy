import React from 'react'
import { Link } from 'wouter'
import './Gif.css'


export default function Gif({ id, title, url }) {
    return (
        <div className="Gif">
            <Link to={`/detail/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={url} />
            </Link>
        </div>

    )
}
