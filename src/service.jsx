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

export const getPreviousSearches = (key) => {
    let searches = localStorage.getItem(key)
    searches = searches?.split(',')
    if( searches?.length === 11){
        searches?.shift()
        localStorage.setItem(key, searches)
    }
    return searches
}

export const appendToLocalStorage = (key, data) => {
    let previous = localStorage.getItem(key)
    if (previous === null) {
        localStorage.setItem(key, [data])
    }
    else {
        localStorage.setItem(key, [previous, data])
    }
}

