import { appendToLocalStorage, getSearchResult } from "../service"
import { getPreviousSearches } from "../service";
import { StyledSearch } from "./styled/StyledSearch";
import { FaSearch } from "react-icons/fa";

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
        <StyledSearch>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search..." value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
                <button className="search-button" onClick={() => {
                    searchInput.length >= 3 ? handleClick() : setError("Search input must be between 3 and 120 characters")
                }}><FaSearch className="icon"></FaSearch></button>
            </div>
        </StyledSearch>

    )
}
export default Search