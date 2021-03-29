import { appendToLocalStorage, getSearchResult } from "../service"
import { getPreviousSearches } from "../service";

const Search = ({ setSearchResult, setLoading, setPreviousSearches, searchInput, setSearchInput }) => {
    return (
        <div>
            <input type="text" placeholder="Search..." value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
            <button onClick={() => {
                searchInput !== "" &&
                    setLoading(true)
                getSearchResult(searchInput).then(res => {
                    appendToLocalStorage("history", searchInput)
                    setPreviousSearches(getPreviousSearches("history"))
                    setSearchResult(res.data.result)

                    setSearchInput("")
                    setLoading(false)
                })

            }}>Search</button>
        </div>
    )
}
export default Search