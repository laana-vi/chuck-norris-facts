

const Pagination = ({ jokesPerPage, totalJokes, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div >
            <nav>
                {currentPage !== 1 && <button onClick={() => {
                    paginate(currentPage - 1)
                }}>prev</button>}
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => {
                        paginate(number)
                    }}>{number}</button>
                ))}
                {currentPage !== pageNumbers.length && pageNumbers.length !== 0 && <button onClick={() => {
                    paginate(currentPage + 1)
                }}>next</button>}
            </nav>
        </div>
    )
}

export default Pagination