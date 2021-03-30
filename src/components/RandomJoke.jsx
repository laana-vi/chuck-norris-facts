import { StyledRandomJoke } from "./styled/StyledRandomJoke"

const RandomJoke = ({ joke }) => {
    return (
        <StyledRandomJoke joke={joke}>
            <img src={joke?.icon_url} alt="" />
            <h3>{joke?.value}</h3>
        </StyledRandomJoke>
    )
}

export default RandomJoke