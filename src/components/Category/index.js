import React from 'react'
import { Link } from 'wouter'

export default function Category({ name, options = [] }) {
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                {
                    options.map((popGif) => (
                        <li key={popGif}>
                            <Link to={`/search/${popGif}`}>{popGif}</Link>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}
