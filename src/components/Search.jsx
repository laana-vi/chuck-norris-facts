import { appendToLocalStorage, getSearchResult } from "../service"
import { getPreviousSearches } from "../service";

const Search = ({ setSearchResult, setLoading, setPreviousSearches, searchInput, setSearchInput, setError }) => {

    const handleClick = () => {
        setLoading(true)
        getSearchResult(searchInput).then(res => {
            appendToLocalStorage("history", searchInput)
            setPreviousSearches(getPreviousSearches("history"))
            setSearchResult(res.data.result)
            setSearchInput("")
            setLoading(false)
            setError()
        })
    }
    return (
        <div>
            <input type="text" placeholder="Search..." value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
            <button onClick={() => {
                searchInput.length >= 3 ? handleClick() : setError("Search input must be between 3 and 120 characters")
                    

            }}>Search</button>
        </div>
    )
}
export default Search