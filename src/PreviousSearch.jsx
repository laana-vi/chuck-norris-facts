import { removeFromLocalStorage } from "./service"

const PreviousSearch = ({search, setSearchInput, setPreviousSearches}) => {
    return (
        <div>
            <p onClick={() => setSearchInput(search)}>{search}</p>
            <button onClick={() => {
                setPreviousSearches(removeFromLocalStorage("history", search))
            }}>X</button>
        </div>
    )
}

export default PreviousSearch