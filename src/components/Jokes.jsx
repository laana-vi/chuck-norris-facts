import Joke from "./Joke"

const Jokes = ({searchResult}) => {
    return (
        <div>
            {searchResult.map(joke => <Joke key={joke.id} joke={joke}/>)}
        </div>
    )
}

export default Jokes