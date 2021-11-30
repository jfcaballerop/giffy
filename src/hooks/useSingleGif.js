import { useEffect, useState } from "react";
import { getSingleGif } from "services/getSingleGif";
import { useGifs } from "./useGifs"

const useSingleGif = ({ id }) => {
	const { gifs } = useGifs();
	const gifsFromCache = gifs.find(singleGif => singleGif.id === id)
	const [gif, setgif] = useState(gifsFromCache);
	const [isLoading, setisLoading] = useState(false);
	const [isError, setisError] = useState(false);

	useEffect(() => {
		if (!gif) {
			setisLoading(true)
			getSingleGif({ id })
				.then(gif => {
					setgif(gif)
					setisLoading(false)
					setisError(false)
				}).catch(err => {
					setisLoading(false)
					setisError(true)
				})
		}
	}, [gif, id]);

	return { gif, isLoading, isError }

}

export default useSingleGif