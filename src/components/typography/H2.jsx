import styled from "styled-components";

const StyledH3 = styled.h2`
    color:${props=>props.theme.second};
    text-transform:uppercase;
    font-size:24px;
    font-weight:700;

`

function H2({children}){
    return(
        <StyledH3>
            {children}
        </StyledH3>
    )
}

export default H2