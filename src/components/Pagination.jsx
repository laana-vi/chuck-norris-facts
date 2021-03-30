import { useEffect, useMemo, useState } from "react"
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { StyledPagination } from "./styled/StyledPagination";

const Pagination = ({ jokesPerPage, totalJokes, paginate, currentPage }) => {
    const [currentButtons, setCurrentButtons] = useState([])
    const pageNumbers = useMemo(() => [], [])
    for (let i = 1; i <= Math.ceil(totalJokes / jokesPerPage); i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        if (currentPage < pageNumbers.length) {
            if (pageNumbers.length <= 5) {
                let tmp = [...pageNumbers]
                setCurrentButtons(tmp)
            }
            else {
                let tmp = []
                for (let i = currentPage; i <= currentPage + 4; i++) {
                    if (i <= Math.ceil(totalJokes / jokesPerPage)) {
                        tmp.push(i)
                        setCurrentButtons(tmp)
                    }
                }
            }
        }

    }, [pageNumbers, currentPage, jokesPerPage, totalJokes])

    return (
        <StyledPagination>
            {pageNumbers.length !== 0 && <button onClick={() => {
                paginate(Math.ceil(1))
            }}><FaAngleDoubleLeft></FaAngleDoubleLeft></button>}
            {currentPage !== 1 && <button onClick={() => {
                paginate(currentPage - 1)
            }}><FaAngleLeft></FaAngleLeft></button>}
            {currentButtons.map(number => (
                <button className={currentPage === number ? "active" : ""} key={number} onClick={() => {
                    paginate(number)
                }}>{number}</button>
            ))}
            {currentPage < Math.ceil(totalJokes / jokesPerPage) && pageNumbers.length !== 0 && <button onClick={() => {
                paginate(currentPage + 1)
            }}><FaAngleRight></FaAngleRight></button>}
            { pageNumbers.length !== 0 && <button onClick={() => {
                paginate(Math.ceil(totalJokes / jokesPerPage))
            }}><FaAngleDoubleRight></FaAngleDoubleRight></button>}
        </StyledPagination>
    )
}

export default Pagination