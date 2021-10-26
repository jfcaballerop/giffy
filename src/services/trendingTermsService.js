import { API_KEY, API_URL } from '../config'

function getTrendingTerms() {
    const URL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    return fetch(URL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            return data;
        }
        )
}

export { getTrendingTerms };