import { useContext, useEffect, useState } from 'react'
import { getGifs } from 'services/apisGifs';
import GifsContext from 'context/GifsContext';
import { INITIAL_PAGE } from 'config';


export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setloading] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext)
    const [page, setpage] = useState(INITIAL_PAGE);
    const [loadingNextPage, setloadingNextPage] = useState(false);

    const keywordToUse = keyword || localStorage.getItem('lastkeyword')

    useEffect(() => {
        setloading(true)

        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs)
            setloading(false)
            localStorage.setItem('lastkeyword', keyword)
        }
        )
    }, [keyword, keywordToUse, setGifs])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        setloadingNextPage(true)

        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setloadingNextPage(false)
            })
    }, [keywordToUse, page, setGifs])
    return { loading, loadingNextPage, gifs, setpage }
}
