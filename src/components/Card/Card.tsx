import React from "react";
import cube from "../../assets/icon-dice.svg";
import { CardWrapper, HeadTitle, AdviceText, StyledButton } from "./StyledCard";

const Card: React.FC = () => {
  return (
    <CardWrapper>
        <HeadTitle>Advice 123123</HeadTitle>
        <AdviceText>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</AdviceText>
        <StyledButton><img src={cube} alt="dice icon" /></StyledButton>
    </CardWrapper>
  )
};

export default Card;
