import { useState } from "react"
import { appendToLoacalStorage, getSearchResult} from "../service"

const Search = ({ setSearchResult,setLoading  }) => {
    const [searchInput, setSearchInput] = useState({})
    return (
        <div>
            <input type="search" placeholder="Search..." onChange={(e) => { setSearchInput(e.target.value) }} />
            <button onClick={() => {
                setLoading(true)
                getSearchResult(searchInput).then(res => {
                    appendToLoacalStorage("history", searchInput)
                    setSearchResult(res.data)
                    setLoading(false)
                })
            }}>Search</button>
        </div>
    )
}
export default Search