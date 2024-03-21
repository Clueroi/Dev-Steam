import styled from 'styled-components'
import { BsCart4 } from "react-icons/bs";

import Logo from '../Logo/Logo'
import Input from '../input/input';

const StyledNavbar = styled.div`
    background-color: ${props=> props.theme.primary};
    color:${props=>props.theme.second};
    height:90px;
    display: flex;
    align-items:center;
    padding: 0 100px;
    justify-content:space-between;
`
const StyledLogo = styled(Logo)`
    flex:1;
`

function Navbar(){
    return(
        <StyledNavbar>
            <StyledLogo/>
            <Input/>
            <BsCart4 size={40} />
        </StyledNavbar>
    )
}

export default Navbar