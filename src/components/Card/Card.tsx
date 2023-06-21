import React from "react";
import cube from "../../assets/icon-dice.svg";
import { CardWrapper, HeadTitle, AdviceText, StyledButton } from "./StyledCard";
import axios from "axios";
import { useState } from "react";

const Card: React.FC = () => {
  interface adviceProps {
    text: string;
    id: number;
  }
  const [advice, setAdvice] = useState<adviceProps>({
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    id: 117
  });
  const handleClick = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const data = response.data.slip;
    setAdvice({...advice, text: data.advice, id: data.id})
    console.log(advice);
  };

  return (
    <CardWrapper>
      <HeadTitle>Advice #{advice.id}</HeadTitle>
      <AdviceText>{advice.text}</AdviceText>
      <StyledButton onClick={handleClick}>
        <img src={cube} alt="dice icon" />
      </StyledButton>
    </CardWrapper>
  );
};

export default Card;
