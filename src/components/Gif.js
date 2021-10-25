import React from 'react'

export default function Gif({ id, title, url }) {
    return (
        <a href={`#${id}`} className="gif">
            <h5 > {title} </h5>
            <img alt={title} key={url} src={url} />
        </a>
    )
}
