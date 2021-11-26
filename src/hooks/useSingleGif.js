import { useEffect, useState } from "react";
import { getSingleGif } from "services/getSingleGif";
import { useGifs } from "./useGifs"

const useSingleGif = ({ id }) => {
	const { gifs } = useGifs();
	const gifsFromCache = gifs.find(singleGif => singleGif.id === id)
	const [gif, setgif] = useState(gifsFromCache);

	useEffect(() => {
		if (!gif) {
			getSingleGif({ id })
				.then(gif => {
					setgif(gif)
				})
		}
	}, [gif, id]);

	return { gif }

}

export default useSingleGif