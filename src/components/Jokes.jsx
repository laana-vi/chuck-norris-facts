import Joke from "./Joke"
import Pagination from "./Pagination"

const Jokes = ({ searchResult, jokesPerPage, totalJokes, paginate, currentPage }) => {
    return (
        <div>
            {searchResult.map(joke => <Joke key={joke.id} joke={joke} />)}
            <Pagination jokesPerPage={jokesPerPage} totalJokes={totalJokes} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}

export default Jokes