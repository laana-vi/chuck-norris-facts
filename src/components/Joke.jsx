import { Link } from "react-router-dom"
const Joke = ({ joke }) => {

    return (
        <Link to={`/details/${joke?.id}`}>
            <img src={joke?.icon_url} alt="" />
            <h3>{joke?.value}</h3>
        </Link>
    )
}

export default Joke