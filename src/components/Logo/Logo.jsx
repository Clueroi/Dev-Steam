import styled from "styled-components"
import Image from "next/image"

const LogoContainer = styled.div`
    display:flex;
    align-items-center;
    gap:20px;
    font-size:20px;
`

function Logo(){
    return(
        <LogoContainer>
            <Image src='/logo.svg' width={60} height={60} />
        </LogoContainer>
    )

}

export default Logo