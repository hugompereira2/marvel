'use client';

import { usePathname } from 'next/navigation';
import LogoMarvel from "../assets/logo.svg"
import Image from 'next/image';
import styled, { css } from "styled-components"
import Link from 'next/link';


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    height: 90px;
    padding: 1.25rem 2rem;

    @media screen and (max-width: 400px) {
        justify-content: center;
        height: 120px;
  }
`

const StyledOptions = styled.div`
    display: flex;
    align-items: center;
    min-width: 230px;
    justify-content: space-between;
    gap: 0.75rem;

    @media screen and (max-width: 675px) {
        min-width: 200px;
  }
`

const StyledLink = styled.a<{ path?: string }>`
  font-size: 1.2rem;
  transition: all 0.2s;
  color: ${(props) =>
        props.href === props.path ? "var(--primary-button)" : "inherit"};

  &:hover {
    color: var(--primary-button);
  }
`;

const Header = () => {
    const pathname = usePathname();

    return (
        <StyledHeader>
            <Link href="/">
                <Image
                    priority
                    src={LogoMarvel}
                    alt="Marvel"
                />
            </Link>
            <StyledOptions>
                <Link href="/" passHref legacyBehavior>
                    <StyledLink path={pathname}>
                        Home
                    </StyledLink>
                </Link>
                <Link href="/personagens" passHref legacyBehavior>
                    <StyledLink path={pathname}>
                        Personagens
                    </StyledLink>
                </Link>
            </StyledOptions>
        </StyledHeader>
    )
}
export default Header
