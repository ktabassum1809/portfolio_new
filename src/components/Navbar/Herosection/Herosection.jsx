import React from "react";
import styled, { keyframes } from "styled-components";
import Bio from "./Bio";
import Typewriter from "typewriter-effect";
import HeroAnimation from "./HeroAnimation";

// Define keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBackground = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: end;
  width: 70%;
  height: 100%;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
  }
`;

const HeroInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;

  @media screen and (max-width: 960px) {
    order: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 640px) {
    order: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 68px;
  color: ${({ theme }) => theme.white};

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 42px;
    margin-bottom: 8px;
  }

  span {
    color: ${({ theme }) => theme.white};
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 16px;
  display: flex;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 24px;
    line-height: 42px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary + "95"};
  line-height: 32px;
  margin-bottom: 32px;
  animation: ${fadeIn} 1s ease-out forwards; // Added animation

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0px;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634, filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Img = styled.img`
  width: 80%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-width: 500px;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  border: 1px solid ${({ theme }) => theme.primary};

  @media screen and (max-width: 960px) {
    max-height: 400px;
  }

  @media screen and (max-width: 640px) {
    max-height: 300px;
  }

 
`;

function Herosection() {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBackground>
          <HeroAnimation />
        </HeroBackground>

        <HeroInner>
          <HeroLeftContainer>
            <Title>
              Hi, I'm <br /> <span>{Bio.name}</span>
            </Title>
            <TextLoop>
              I'm a
              <Span>
                <Typewriter options={{ strings: Bio.roles, autoStart: true, loop: true }} />
              </Span>
            </TextLoop>
            <Subtitle>{Bio.description}</Subtitle>
            <ResumeButton href={Bio.resume} target="_blank">Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src="profile.jpg" alt="profilepic" />
          </HeroRightContainer>
        </HeroInner>
      </HeroContainer>
    </div>
  );
}

export default Herosection;
