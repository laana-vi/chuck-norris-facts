import Joke from "./Joke"
import Pagination from "./Pagination"
import { StyledJokes } from "./styled/StyledJokes"

const Jokes = ({ searchResult, jokesPerPage, totalJokes, paginate, currentPage }) => {
    return (
        <StyledJokes searchResult={searchResult}>
            {
                searchResult?.length !== 0
                    ?
                    <>
                        {searchResult?.map(joke => <Joke key={joke.id} joke={joke} />)}
                        <Pagination jokesPerPage={jokesPerPage} totalJokes={totalJokes} paginate={paginate} currentPage={currentPage} />
                    </>
                    :
                    <img className="try-again" src="https://res.cloudinary.com/dpj7zvqzs/image/upload/v1617132372/Untitled_design_7_uuovce.png" alt="" />
            }

        </StyledJokes>
    )
}

export default Jokes