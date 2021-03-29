import PreviousSearch from "./PreviousSearch"

const PreviousSearches = ({ previousSearches, setSearchInput, setPreviousSearches }) => {
    let key = 0
    return (
        <div>
            {previousSearches.map(search => <PreviousSearch key={key++} search={search} setSearchInput={setSearchInput} setPreviousSearches={setPreviousSearches} />)}
        </div>
    )
}

export default PreviousSearches