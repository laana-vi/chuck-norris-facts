import { useEffect, useMemo, useState } from "react"

const Pagination = ({ jokesPerPage, totalJokes, paginate, currentPage }) => {
    const [currentButtons, setCurrentButtons] = useState([])
    const pageNumbers = useMemo(() => [], [])
    for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        if (currentPage < pageNumbers.length) {
            if (pageNumbers.length <= 11) {
                let tmp = [...pageNumbers]
                setCurrentButtons(tmp)
            }
            else {
                let tmp = []
                for (let i = currentPage; i <= currentPage + 10; i++) {
                    if (i <=Math.ceil(totalJokes / jokesPerPage)) {
                        tmp.push(i)
                        setCurrentButtons(tmp)
                    }
                }
            }
        }

    }, [pageNumbers, currentPage,jokesPerPage, totalJokes])

    return (
        <div >
            <nav>
                {currentPage !== 1 && <button onClick={() => {
                    paginate(currentPage - 1)
                }}>prev</button>}
                {currentButtons.map(number => (
                    <button key={number} onClick={() => {
                        paginate(number)
                    }}>{number}</button>
                ))}
                {currentPage <Math.ceil(totalJokes / jokesPerPage) && pageNumbers.length !== 0 && <button onClick={() => {
                    paginate(currentPage + 1)
                }}>next</button>}
            </nav>
        </div>
    )
}

export default Pagination