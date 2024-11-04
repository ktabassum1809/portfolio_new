import React from 'react';
import { GiRocket } from "react-icons/gi";
import styled from 'styled-components';

const Container = styled.div`
 
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


const StyledForm = styled.form`
 width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  color: #c2c4c6;
  margin-bottom: 10px;
  font-size: 1rem;

  svg {
    margin-left: 8px;
    color: #854ce6;
  }
`;

const Input = styled.input`
   flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

`;

const SubmitButton = styled.button`
 width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;

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

const Error = styled.p`
    color: white;
    font-size: 1rem;
    text-align: center;
    margin-top: 12px;
`;

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
    
        const formData = new FormData(event.target);
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
    
            const data = await response.json();
    
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResult("Submission failed. Please check your connection and try again.");
        }
    };
    

  return (
    <Container>
    <Wrapper>
    <Title>Contact Me</Title>
    <Desc>
          Feel free to reach out to me for any queries or project ideas. I am always open to new opportunities and collaborations.
        </Desc>
    <StyledForm onSubmit={onSubmit}>
    <Label>Email Me <GiRocket size={28} /></Label>
    <Input type="email" name='email' placeholder="Your Email" />
    <Input type="text" name='name' placeholder="Your Name" />
    <Input type="text" name="subject" placeholder="Subject" />
    <TextArea name='message'  placeholder="Message"></TextArea>
    <input type="hidden" name="access_key" value="c0e9e336-08e8-4e37-8caf-896ee3473952"></input>
    <SubmitButton type="submit">Send</SubmitButton>
  </StyledForm>
  {
    result ?  <Error>Thanks for reaching out! Will get back to you soon.</Error>: <Error>{result}</Error> 
  }
 
    </Wrapper>
    </Container>
   
  );
}

export default Contact;