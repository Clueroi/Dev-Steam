import styled from 'styled-components'
import { BsCart4 } from "react-icons/bs";
import Logo from '../Logo/Logo'

const StyledNavbar = styled.div`
    background-color: ${props=> props.theme.primary};
    color:${props=>props.theme.second};
    height:90px;
    display: flex;
    align-items:center;
    padding: 0 100px;
`
const StyledLogo = styled(Logo)`
    flex:1;
`

function Navbar(){
    return(
        <StyledNavbar>
            <StyledLogo/>
            <BsCart4 size={40} />
        </StyledNavbar>
    )
}

export default Navbar