import React from "react";
import styled from "styled-components";
import Skilldata from "./Skilldata";

const Container = styled.div`
  background-color: ${({ theme }) => theme.card_light};
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

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;

  gap: 30px;
`;

const Skill = styled.div`
  width: 500px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;

  background-color: rgb(16, 23, 37);
  border-radius: 16px;
  border: 0.1px solid #854ce6;
  padding: 18px 36px;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media screen and (max-width: 480px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const SkillName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
`;

function Skills() {
  console.log(Skilldata);
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills </Title>
        <Desc>
          "Throughout my journey to becoming a Full Stack Developer, I have
          developed and refined a diverse set of skills."
        </Desc>
        <SkillsContainer>
          {Skilldata.map((item) => {
            return (
              <Skill>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill) => {
                    return (
                      <SkillItem>
                        <SkillImage src={skill.image} alt={skill.name} />
                        <SkillName>{skill.name}</SkillName>
                      </SkillItem>
                    );
                  })}
                </SkillList>
              </Skill>
            );
          })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;
