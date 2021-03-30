import { Link } from "react-router-dom"
import { StyledJoke } from "./styled/StyledJoke"
const Joke = ({ joke }) => {

    return (
        <StyledJoke>
            <Link className="link" to={`/details/${joke?.id}`}>
                <h3>{joke?.value}</h3>
            </Link>
        </StyledJoke>

    )
}

export default Joke