import React from "react";
import styled from "styled-components";
import TimeLine from "@mui/lab/Timeline";
import Experiencedata from "./Experiencedata";
import TimeLineItem from "@mui/lab/TimelineItem";
import TimeLineSeparator from "@mui/lab/TimelineSeparator";
import TimeLineConnector from "@mui/lab/TimelineConnector";
import TimeLineContent from "@mui/lab/TimelineContent";
import TimeLineDot from "@mui/lab/TimelineDot";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
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

const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  border: 0.1px solid #306ee8; // Removed duplicate border
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px; // Removed duplicate box-shadow
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.white + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const SkillList = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;


function Experience() {
  console.log(Experiencedata);
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          Below is a summary of my key roles and accomplishments, showcasing a
          diverse background in software development, system testing, IT
          instruction. These experiences reflect my commitment to technical
          excellence, team collaboration, and impactful contributions across
          various projects and industries.
        </Desc>

        <TimeLineSection>
          <TimeLine>
            {Experiencedata.map((data, index) => (
              <TimeLineItem key={data.id}>
                <TimeLineSeparator>
                  <TimeLineDot variant="outlined" color="secondary" />
                  {index !== Experiencedata.length - 1 && <TimeLineConnector />}

                  <TimeLineConnector />
                  <TimeLineDot variant="outlined" color="secondary" />
                </TimeLineSeparator>

                <TimeLineContent sx={{ py: "12px", px: "16px" }}>
                  <Card>
                    <Top>
                      <Image src={data.img} alt={`${data.company} logo`} />
                      <Body>
                        <Role>{data.role}</Role>
                        <Company>{data.company}</Company>
                        <Duration>{data.date}</Duration>
                      </Body>
                    </Top>
                    <Description>
                      {data.desc &&
                        data.desc.map((desc, index) => (
                          <p key={index}>{desc}</p>
                        ))}
                    </Description>
                    <Skills>
                    <b>Skills:</b>
                            <ItemWrapper>
                    { data.skills &&
                      data.skills.map((skill, index) => (
                        <SkillList key={index}>{skill}</SkillList>
                      ))

                    }
                    </ItemWrapper>
                    
                    </Skills>
                  </Card>
                </TimeLineContent>
              </TimeLineItem>
            ))}
          </TimeLine>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
}

export default Experience;
