import { API_KEY, API_URL } from 'config'

function getGifs({ keyword = 'null' } = {}) {
    const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=es`;

    return fetch(URL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs;
        }
        )
}

export { getGifs };