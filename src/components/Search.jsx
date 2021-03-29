import { useState } from "react"
import { getSearchResult} from "../service"

const Search = ({ setSearchResult,setLoading  }) => {
    const [searchInput, setSearchInput] = useState({})
    return (
        <div>
            <input type="search" placeholder="Search..." onChange={(e) => { setSearchInput(e.target.value) }} />
            <button onClick={() => {
                setLoading(true)
                getSearchResult(searchInput).then(res => {
                    setSearchResult(res.data)
                    setLoading(false)
                })
            }}>Search</button>
        </div>
    )
}
export default Search