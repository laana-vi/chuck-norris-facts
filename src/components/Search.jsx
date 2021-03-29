import { useState } from "react"
import { appendToLocalStorage, getSearchResult} from "../service"
import { getPreviousSearches } from "../service";

const Search = ({ setSearchResult,setLoading, setPreviousSearches  }) => {
    const [searchInput, setSearchInput] = useState({})
    return (
        <div>
            <input type="search" placeholder="Search..." onChange={(e) => { setSearchInput(e.target.value) }} />
            <button onClick={() => {
                setLoading(true)
                getSearchResult(searchInput).then(res => {
                    appendToLocalStorage("history", searchInput)
                    setPreviousSearches(getPreviousSearches("history"))
                    setSearchResult(res.data)
                    setLoading(false)
                })
            }}>Search</button>
        </div>
    )
}
export default Search