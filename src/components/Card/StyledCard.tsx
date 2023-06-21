import styled from "styled-components";
import patternDesktop from "../../assets/pattern-divider-desktop.svg";
import patternMobile from "../../assets/pattern-divider-mobile.svg";

const maxMobile = "549px";

export const CardWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  padding: 48px 48px 128px 48px;
  width: 540px;
  height: 332px;
  background: var(--dark-gray);
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 15px;
  font-weight: 800;
  @media (max-width: ${maxMobile}) {
    padding: 40px 24px 104px 24px;
    width: 343px;
    height: 315px;
  }
`;

export const HeadTitle = styled.h1`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 4.08571px;
  color: var(--green);
  text-transform: uppercase;
  @media (max-width: ${maxMobile}) {
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 3.45714px;
  }
`;

export const AdviceText = styled.h2`
  font-size: 28px;
  line-height: 38px;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.3px;
  color: var(--cyan);
  ::after {
    content: url(${patternDesktop});
    position: absolute;
    bottom: 70px;
    left: 0;
    right: 0;
    @media (max-width: ${maxMobile}) {
    content: url(${patternMobile});
    bottom: 55px;
  }
  }
  @media (max-width: ${maxMobile}) {
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.257143px;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  bottom: -28px;
  width: 64px;
  height: 64px;
  padding: 20px;
  border-radius: 50%;
  background: var(--green);
  img {
    width: 24px;
    height: 24px;
  }
  :hover {
    box-shadow: 0px 0px 40px #53ffaa;
  }
`;
