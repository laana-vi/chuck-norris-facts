import PreviousSearch from "./PreviousSearch"
import { StyledPreviousSearches } from "./styled/StyledPreviousSearches"

const PreviousSearches = ({ previousSearches, setSearchInput, setPreviousSearches }) => {
    let key = 0
    return (
        <StyledPreviousSearches>
            {previousSearches.map(search => <PreviousSearch key={key++} search={search} setSearchInput={setSearchInput} setPreviousSearches={setPreviousSearches} />)}
        </StyledPreviousSearches>
    )
}

export default PreviousSearches