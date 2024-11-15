/* import styled from 'styled-components';

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 28px;
`;

const Card = styled.div`
    width: 500px;
 
    background-color: rgb(25, 25, 36);
    color:rgb(194, 196, 198);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    `;

const Image = styled.img`
width:90%;
height:40%;
border-radius: 10px;
objet-fit: cover;
`;

const ProjectCard = ({ toggle }) => {
    return (
        <CardsContainer>
            {ProjectData.filter(project => toggle === "all" || project.category === toggle).map(project => (
                <Card key={project.id}>
                   <Image src={project.image} />
                   <div>{project.technologies.map(tech => {
                          return <span>{tech}</span>

                   })

                   }</div>
                    <h3>{project.title}</h3>
                    <p>{project.date}</p>
                    <p>{project.description}</p>
                    <a href={project.link}>view project</a>
                    <a href={project.github}>view code</a>
                </Card>
            ))}
        </CardsContainer>
    );
};

export default ProjectCard; */

import React from "react";
import ProjectData from "./ProjectData";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

const Card = styled.div`
  width: 500px;
  height:400px;
  background-color: rgb(25, 25, 36);
  color: rgb(194, 196, 198);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 80%;
  height: 30%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
    background-color: rgb(35, 30, 54);
    color: rgb(133, 76, 230);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;
   

    &:hover {
    background-color: rgb(133, 76, 230);
    color: white;
    border: 1px solid rgb(133, 76, 230);
`;

const Title = styled.h3`
font-size: 1.2rem;
font-weight: bold;
color: rgb(194, 196, 198);
text-align: left;
width: 100%; /* Full width to align with date */
`;

const DateText = styled.p`
font-size: 0.9rem;
color: rgb(150, 150, 150);
margin: 0;
text-align: left;
width: 100%; /* Full width to align with title */
`;

const Description = styled.p`
font-size: 0.8rem;
color: rgb(194, 196, 198);
text-align: left;
`;

const Button = styled.a`
  background-color: rgb(35, 30, 54);
  color: rgb(133, 76, 230);
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;

  font-weight: bold;

  transition: background-color 0.3s ease, transform 0.3s ease;

  ${({ active}) =>
  active &&
  `
  background-color: rgb(133,76,230);
  color:white;
  `}

  &:hover {
    background-color: rgb(133, 76, 230);
    color: white;
    transform: scale(1.05); /* Slightly scale button on hover */
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

const ProjectCard = ({ toggle }) => {
  return (
    <CardsContainer>
      {ProjectData.filter(
        (project) => toggle === "all" || project.category === toggle
      ).map((project) => (
        <Card key={project.id}>
          <Image src={project.image} alt={project.title} />
          <TechContainer>
            {project.technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechContainer>
          <Title>{project.title}</Title>
          <DateText>{project.date}</DateText>
          <Description>{project.description}</Description>
          <ButtonDiv>
            <Button active href={project.link} target="_blank">View Project</Button>
            <Button href={project.github} target="_blank">View Code</Button>
          </ButtonDiv>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default ProjectCard;
