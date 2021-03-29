import axios from 'axios'

const BASE_URL = 'https://api.chucknorris.io/jokes'
const SEARCH = 'search?query'
const RANDOM_JOKE = 'random'

export const getRandomJoke = () => {
    return axios.get(`${BASE_URL}/${RANDOM_JOKE}`)
}

export const getSearchResult = (query) => {
    return axios.get(`${BASE_URL}/${SEARCH}=${query}`)
}