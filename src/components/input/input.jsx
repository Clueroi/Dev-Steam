import styled from "styled-components";

const StyledInput = styled.input`
    color: ${props=>props.theme.second};
    border-radius:16px;
    border:1px solid ${props => props.theme.second};
    background-color: ${props => props.theme.primary};
    padding:15px 20px;
    box-sizing: border-box;
`

function Input(){
    return(
            <StyledInput/>
    )
}

export default Input