import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import useSEO from 'hooks/useSEO'
import { Helmet } from 'react-helmet'

export default function SearchResults({ params }) {
	const { keyword } = params
	const { loading, gifs, setpage } = useGifs({ keyword })
	const visorREf = useRef()
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : visorREf,
		once: false
	})

	const handleNextPage = () => setpage(prevPage => prevPage + 1)
	const debounceHandleNextPage = useCallback(debounce(
		() => setpage(prevPage => prevPage + 1), 200
	), [setpage])

	const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''


	useEffect(function () {
		if (isNearScreen) debounceHandleNextPage()
	}, [debounceHandleNextPage, isNearScreen])


	return <>
		{loading
			? <Spinner />
			: <>
				<Helmet>
					<title>{title}</title>
					<meta name="description" content={title}></meta>
				</Helmet>
				<h3 className="App-title">
					{decodeURI(keyword)}
				</h3>
				<ListOfGifs gifs={gifs} />
				<br />
				<div id="visor" ref={visorREf}></div>
				{/* <button onClick={handleNextPage}>Next Page </button> */}
			</>
		}
	</>
}