import LogoMarvel from "../assets/logo.svg"
import Image from 'next/image';
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 1.25rem 2rem;
`

const StyledOptions = styled.div`
    display: flex;
    align-items: center;
    min-width: 400px;
    justify-content: space-between;
    gap: 0.75rem;
`

const Header = () => {
    return (
        <StyledHeader>
            <a href="/">
                <Image
                    priority
                    src={LogoMarvel}
                    alt="Marvel"
                />
            </a>
            <StyledOptions>
                <a href="/">Personagens</a>
                <a href="/">Personagens</a>
                <a href="/">Personagens</a>
            </StyledOptions>
        </StyledHeader>
    )
}
export default Header
