import { StyledError } from "./styled/StyledError"

const Error = ({error}) => {
    return (
        <StyledError error={error}>
            <p>{error}</p>
        </StyledError>
    )
}
export default Error