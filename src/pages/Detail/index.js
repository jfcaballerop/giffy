import Gif from 'components/Gif'
import Spinner from 'components/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import useSEO from 'hooks/useSEO'
import React from 'react'
import { Redirect } from 'wouter'

export default function Detail({ params }) {
	const { gif, isLoading, isError } = useSingleGif({ id: params.id })
	const title = gif ? gif.title : ''

	useSEO({ description: `Detail of ${title}`, title })


	if (isError) return <Redirect to='/404' />

	if (isLoading) return <Spinner />
	if (!gif) return null

	return <>
		<h3 className="App-title">{gif.title}</h3>
		<Gif {...gif} />
	</>
}