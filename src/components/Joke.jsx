const Joke = ({joke}) => {
    return (
        <div onClick={() => {
            console.log(joke.id)
        }}>
            <img src={joke?.icon_url} alt=""/>
            <h3>{joke?.value}</h3>
        </div>
    )
}

export default Joke