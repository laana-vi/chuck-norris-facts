import Joke from "./Joke"
import Pagination from "./Pagination"
import { StyledJokes } from "./styled/StyledJokes"

const Jokes = ({ searchResult, jokesPerPage, totalJokes, paginate, currentPage }) => {
    return (
        <StyledJokes searchResult={searchResult}>
            {searchResult?.map(joke => <Joke key={joke.id} joke={joke} />)}
            <Pagination jokesPerPage={jokesPerPage} totalJokes={totalJokes} paginate={paginate} currentPage={currentPage} />
        </StyledJokes>
    )
}

export default Jokes