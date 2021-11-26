import { API_KEY, API_URL } from '../config'

function getSingleGif({ id }) {
	const URL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;


	return fetch(URL)
		.then(res => res.json())
		.then(response => {
			const { data } = response
			const { images, title, id } = data
			const { url } = images.downsized_medium
			return { title, id, url }
		}
		)
}

export { getSingleGif };