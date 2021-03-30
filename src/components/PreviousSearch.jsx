import { removeFromLocalStorage } from "../service"
import { StyledPreviousSearch } from "./styled/StyledPreviousSearch"
import { FaRegTimesCircle } from "react-icons/fa";

const PreviousSearch = ({search, setSearchInput, setPreviousSearches}) => {
    return (
        <StyledPreviousSearch>
            <p onClick={() => setSearchInput(search)}>{search}</p>
            <button onClick={() => {
                setPreviousSearches(removeFromLocalStorage("history", search))
            }}><FaRegTimesCircle size={20} className="icon"></FaRegTimesCircle></button>
        </StyledPreviousSearch>
    )
}

export default PreviousSearch