import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import { useState } from "react";

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
`;


const NavLogo = styled(LinkR)`
width: 80%;
padding: 0 6px;
display: flex;
justify-content: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
align-items: center;

@media screen and (max-width: 640px) {
padding: 0 0px;
}

`;

const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
color: ${({ theme }) => theme.text_primary};
}
`;

const NavItems = styled.ul`
width: 100%;
display: flex;
justify-content: center;
list-style: none;
align-items: center;
gap: 10px;

@media screen and (max-width: 768px) {
display: none;
}
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition:all  0.3s ease;

&:hover {
color: ${({ theme }) => theme.primary};
}
`;

const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: end;
width: 100%;
height: 100%;
padding: 0 6px;

@media screen and (max-width: 640px) {
display: none;
}
`;

const Span = styled.span`
color: ${({ theme }) => theme.white};
font-size: 1.5rem;
`;

const GithubButton = styled.a`
background-color: transparent;
color: ${({ theme }) => theme.primary};
border: 1.8px solid ${({ theme }) => theme.primary};
border-radius: 50px;
justify-content: center;
align-items: center;
padding: 6px 20px;
font-size: 1rem;
font-weight: 500;
cursor: pointer;
height: 70%;
text-decoration: none;

&:hover {
background-color: ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.white};
}
`;

const MobileMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
position: absolute;
top: 80px;
left: 0;
width: 100%;
padding: 12px 40px 24px 40px;
background-color: ${({ theme }) => theme.card_light};
transition: ${({open }) => open ? 'translateX(0)' : 'translateX(100%)'};
border-radius: 0 0 20px 20px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
opacity: ${({open }) => open ? '1' : '0'};
z-index: ${({open }) => open ? '1' : '-1'};
`;

const MobileMenuLink = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition:all  0.3s ease;

&:hover {
color: ${({ theme }) => theme.primary};
}
`;

const MobileGitHubButton = styled.a`
background-color: transparent;
color: ${({ theme }) => theme.primary};
border: 1.8px solid ${({ theme }) => theme.primary};
border-radius: 50px;
justify-content: center;
align-items: center;
padding: 0px 20px;
font-size: 1rem;
font-weight: 500;
cursor: pointer;
height: 70%;
text-decoration: none;

&:hover {
background-color: ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.white};
}
`;





function Navbar() {
const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/"> <a style={{display: "flex",alignItems: "center",marginBottom: "20",color: "white", cursor: "pointer",textDecoration: "none"

        }}><DiCssdeck size="3rem"/><Span>Portfolio</Span></a></NavLogo> 
        <MobileIcon>
          <FaBars onClick={()=> setOpen(!open)}/>
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education"> Education</NavLink>
          <NavLink href="#experience">Experience</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href="https://github.com/ktabassum1809" target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {
        open ? (
         <MobileMenu open={open}>
          <MobileMenuLink href="#about" onClick={()=> setOpen(!open)}>About</MobileMenuLink>
          <MobileMenuLink href="#skills" onClick={()=> setOpen(!open)}>Skills</MobileMenuLink>
          <MobileMenuLink href="#projects" onClick={()=> setOpen(!open)}>Projects</MobileMenuLink>
          <MobileMenuLink href="#education" onClick={()=> setOpen(!open)}>Education</MobileMenuLink>
          <MobileMenuLink href="#experience" onClick={()=> setOpen(!open)}>Experience</MobileMenuLink>
       
          <MobileGitHubButton style={{padding: "10px 16px",backgroundColor:`${({ theme }) => theme.primary}`,color: `${({ theme }) => theme.white}`,width: "max-content"}} href='https://github.com/ktabassum1809' target="_blank">Github Profile</MobileGitHubButton>
 
         
         </MobileMenu>
      
        ) : null
      }
    </Nav>
  );
}

export default Navbar;
