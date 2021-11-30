import Gif from 'components/Gif'
import Spinner from 'components/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import React from 'react'
import { Redirect } from 'wouter'

export default function Detail({ params }) {
	const { gif, isLoading, isError } = useSingleGif({ id: params.id })

	if (isError) return <Redirect to='/404' />

	if (isLoading) return <Spinner />
	if (!gif) return null

	return <>
		<h3 className="App-title">{gif.title}</h3>
		<Gif {...gif} />
	</>
}