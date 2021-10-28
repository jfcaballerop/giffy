import React, { useEffect, useRef } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs, setpage } = useGifs({ keyword })
    const { externalRef } = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef })

    // const handleNextPage = () => setpage(prevPage => prevPage + 1)

    const handleNextPage = () => console.log('next page')

    useEffect(() => {
        if (isNearScreen) handleNextPage()

    })

    return <>
        {loading
            ? <Spinner />
            : <>
                <h3 className="App-title">
                    {decodeURI(keyword)}
                </h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
        <br />
        {/* <button onClick={handleNextPage}>Get next page</button> */}
    </>
}