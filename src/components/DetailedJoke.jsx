import { useEffect, useState } from "react"
import { useParams } from "react-router"

const DetailedJoke = ({ searchResult }) => {
    const [joke, setJoke] = useState([])
    let { id } = useParams()

    useEffect(() => {
        setJoke(searchResult.filter(joke => joke.id === id))
    }, [id, searchResult])

    return (
        <div>
           <img src={joke[0]?.icon_url} alt="" />
            <h3>{joke[0]?.value}</h3>
        </div>
    )
}

export default DetailedJoke