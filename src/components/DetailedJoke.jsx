import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { StyledDetailedJoke } from "./styled/StyledDetailedJoke"
import { BiUndo } from "react-icons/bi";

const DetailedJoke = ({ searchResult }) => {
    const [joke, setJoke] = useState([])
    let { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        setJoke(searchResult?.filter(joke => joke.id === id))
    }, [id, searchResult])

    return (
        <StyledDetailedJoke>
            <button onClick={() => {
                history.goBack();
            }}><BiUndo size={30}></BiUndo></button>
                <img src={joke[0]?.icon_url} alt="" />
                <h3>{joke[0]?.value}</h3>
        </StyledDetailedJoke>

    )
}

export default DetailedJoke