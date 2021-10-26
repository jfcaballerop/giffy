import { useContext, useEffect, useState } from 'react'
import { getGifs } from 'services/apisGifs';
import GifsContext from 'context/GifsContext';

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setloading] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext)

    useEffect(() => {
        setloading(true)
        const keywordToUse = keyword || localStorage.getItem('lastkeyword')

        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs)
            setloading(false)
            localStorage.setItem('lastkeyword', keyword)
        }
        )
    }, [keyword, setGifs])
    return { loading, gifs }
}
