import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs, setpage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        onse: false
    })

    console.log(isNearScreen);

    const debounceNextPage = useCallback(debounce(
        () => setpage(prevPage => prevPage + 1), 2000
    ), [])

    useEffect(() => {
        // console.log('externalRef', externalRef);
        if (isNearScreen) debounceNextPage()

    }, [])


    return <>
        {loading
            ? <Spinner />
            : <>
                <h3 className="App-title">
                    {decodeURI(keyword)}
                </h3>
                <ListOfGifs gifs={gifs} />
            </>
        }
        <br />
        <div id="visor" ref={externalRef}></div>
    </>
}