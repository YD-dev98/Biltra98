import styled, {css} from "styled-components";

const ButtonStyled = styled.button`
    border: none;
    background-color: DodgerBlue;
    padding: 8px 20px;
    color: white;
    font-weight: bold;
    border-radius: 6px;
    font-size: 15px;
    ${props => props.outline && css`
            border: 1px solid lightGray;
            background-color: transparent;
        `
    /*Above is a shortcut that returns instantly, original looks like:
    ${props => {
        return props.outline && css`
            border: 1px solid lightGray;
            background-color: transparent;
        `; */
    }
`

function Button({ loading, label, ...rest} ) {
    return (
        <ButtonStyled disabled={loading} {...rest}>
            {loading ? "Loading" : label}
        </ButtonStyled>
    ) 
}

export default Button