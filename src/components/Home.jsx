import { useEffect, useState } from "react";
import Jokes from "./Jokes";
import Loading from "./Loading";
import Search from "./Search";
import Error from "./Error";
import PreviousSearches from "./PreviousSearches";
import { getPreviousSearches, getRandomJoke } from "../service";
import RandomJoke from "./RandomJoke";


const Home = ({ searchResult, setSearchResult }) => {

  const [searchInput, setSearchInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [previousSearches, setPreviousSearches] = useState([])
  const [randomJoke, setRandomJoke] = useState()
  const [error, setError] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [jokesPerPage] = useState(20)
 

  let indexOfLastJoke = currentPage * jokesPerPage
  let indexOfFirstJoke = indexOfLastJoke - jokesPerPage
  let currentJokes = searchResult.slice(indexOfFirstJoke, indexOfLastJoke)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    setPreviousSearches(getPreviousSearches("history"))
  }, [setPreviousSearches])

  useEffect(() => {
    getRandomJoke().then(res => setRandomJoke(res.data))
  }, [])

  return (
    <div>
      
      <Search setSearchResult={setSearchResult} setLoading={setLoading} setPreviousSearches={setPreviousSearches} searchInput={searchInput} setSearchInput={setSearchInput} setError={setError} />
      <Error error={error} />
      {
        previousSearches.length === 0
          ?
          <RandomJoke joke={randomJoke} />
          :
          <PreviousSearches previousSearches={previousSearches} setSearchInput={setSearchInput} setPreviousSearches={setPreviousSearches} />
      }
      {
        loading
          ?
          <Loading />
          :
          <Jokes searchResult={currentJokes} jokesPerPage={jokesPerPage} totalJokes={searchResult.length} paginate={paginate} currentPage={currentPage} />}
    </div>
  )
}

export default Home