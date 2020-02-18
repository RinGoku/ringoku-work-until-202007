import React, { useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
    <>
        {isOpen && 
        <NavList>
          <Close onClick={onClose}　/>
          <NavLinks>
            <NavLink to="/">Top</NavLink>
            <NavLink to="about">About</NavLink>
          </NavLinks>
        </NavList> }
        <NavButton aria-controls="menu" aria-expand={isOpen} onClick={onOpen}>
            <NavLine1st />
            <NavLine />
            <NavLine3rd />
        </NavButton>
    </>);
}

const openNav = keyframes`
    from {
        max-width: 0;
    }
    to {
        max-width: 500px;  
    }
`;

const closeNav = keyframes`
    from {
        max-width: 500px;  
    }
    to {
        max-width: 0;
    }
`;

const Close = styled.span`
    &::before,
    &::after {
        display: block;
        content: "";
        position: absolute;
        top: 60px;
        right: 10px;
        width: 60px;
        height: 12px;
        margin: -8% 0 0 -42%;
        background-color:  ${props => props.theme.secondary};
    }
    &::before {
        transform: rotate(-45deg);
    }
    &::after {
        transform: rotate(45deg);
    }
`;

const NavLinks = styled.div`
    padding: 3rem;
`;

const NavLink = styled(Link)`
    display: block;
    width: 100%;
    font-size: 3rem;
    text-decoration: none;
    border-bottom: none;
    margin-bottom: 12px;
    color:  ${props => props.theme.primary};
`;

const NavList = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;
    width: 100vw;
    max-width: 0;
    height: 100vh;
    background-color: ${props => props.theme.background};
    animation: ${openNav} 0.1s linear forwards;

    @media (min-width: 601px) {
        border-left:  1px solid ${props => props.theme.secondary};
    }
`;

const NavButton = styled.button`
    position: fixed;
    top: 10px;
    z-index: 20;
    right: 10px;
    width: 120px;
    height: 120px;
    appearance: none;
    border: 0;
    border-radius: 120px;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    background-color:  ${props => props.theme.secondary};

    @media (max-width: 767px) {
        top: 5px;
        right: 5px;
        width: 60px;
        height: 60px;
    }
`;

const NavLine = styled.div`
    position: absolute;
    top: calc(50% - 2.5px);
    left: 30px;
    width: calc(100% - 60px);
    height: 5px;
    background-color:  ${props => props.theme.primary};
    @media (max-width: 767px) {
        top: calc(50% - 2.5px);
        left: 15px;
        width: calc(100% - 30px);
        height: 5px;
    }
`;

const NavLine1st = styled(NavLine)`
    transform: translateY(-20px);
    @media (max-width: 767px) {
        transform: translateY(-10px);
    }   
`;

const NavLine3rd = styled(NavLine)`
    transform: translateY(20px);
    @media (max-width: 767px) {
        transform: translateY(10px);
    }
`;

export default NavMenu;