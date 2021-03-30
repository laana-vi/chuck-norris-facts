import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

const DetailedJoke = ({ searchResult }) => {
    const [joke, setJoke] = useState([])
    let { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        setJoke(searchResult.filter(joke => joke.id === id))
    }, [id, searchResult])

    return (
        <div>
            <button onClick={() => {
                history.goBack();
            }}>Back</button>
            <div>
                <img src={joke[0]?.icon_url} alt="" />
                <h3>{joke[0]?.value}</h3>
            </div>
        </div>

    )
}

export default DetailedJoke