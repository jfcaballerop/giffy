import React, { useEffect, useState } from 'react'
import { getTrendingGifs } from '../../services/trendingTermsService';
import Category from '../Category';

export default function TrendingSearches() {
    const [trends, settrends] = useState([]);

    useEffect(() => {
        getTrendingGifs().then(settrends)
    }, []);

    return (
        <div>
            <Category name='Trendings' options={trends} ></Category>
        </div>
    )
}
