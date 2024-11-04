import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Container = styled.div`

  background-color: ${({ theme }) => theme.bg_secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`

  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-bottom: 50px;

`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 960px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 300;
  margin: 22px 0px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  
${({ active, theme }) =>
  active &&
  `
  background-color: ${theme.primary + 20};
  `}

 

  &:hover {
    background-color: ${({ theme }) => theme.primary + 8};
    
  }

  @media screen and (max-width: 768px) {
  padding: 6px 8px;
  border-radius: 4px;
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

function Projects() {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here is a showcase of key projects I developed during my MERN stack
          course:
        </Desc>
        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}

          <Divider />
          {toggle === "javascript" ? (
            <ToggleButton
              active
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              JAVASCRIPT
            </ToggleButton>
          ) : (
            <ToggleButton
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              JAVASCRIPT
            </ToggleButton>
          )}

          <Divider />
          {toggle === "react" ? (
            <ToggleButton
              active
              value="react"
              onClick={() => setToggle("react")}
            >
              REACT
            </ToggleButton>
          ) : (
            <ToggleButton value="react" onClick={() => setToggle("react")}>
              REACT
            </ToggleButton>
          )}
        </ToggleGroup>
        <CardContainer>
          <ProjectCard toggle={toggle}/>
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Projects;
