import styled, { keyframes, css } from "styled-components";

export const FloatNav = styled.header`
    padding: 15px;
    position: fixed;
    width: 100%;
    display: inline;
    top: 0;
`;

const blinkEffect = keyframes`
    50% {
        opacity: 0;
    }
`;
 type priceTypes = {
     blink: boolean
}
const animation = css`
  animation: ${blinkEffect}  0.5s linear 4;
`;

export const Price = styled.div<priceTypes>`
    color: white;
    font-weight: bold;
    float: right;
    margin-right: 30px;
    font-size: 35px;
    ${({blink}) => (blink && css`
        ${animation}
    `)}
`;
