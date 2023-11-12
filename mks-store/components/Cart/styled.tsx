import styled from "styled-components";
import { animated } from "react-spring";

export const CartWrapper = styled(animated.div)`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0F52BA;
  box-shadow: -5px 0 6px 0 rgba(0, 0, 0, 0.13);
  justify-content: space-between;
  position: absolute;
  right: 0;
`;


export const ContentWrapper = styled.section`
    width: 24.0625em;
    height: 40.375em;
    padding: 0.3em;
    overflow: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TotalWrapper = styled.div`
  width: 23.5em;
  height: 0.9375em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.75em;
    font-style: normal;
    font-weight: 700;
  }
`;

export const FinishPurchase = styled.div`
  width: 100%;
  height: 6.0625em;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.75em;
    font-style: normal;
    font-weight: 700;
  }
`;


export const HeaderWrapper = styled.div`
  width: 26.0625em;
  height: 3.5em;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;


  p {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6875em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;


export const ItemWrapper = styled.div`
  width: 23.6875em;
  height: 5.9375em;
  flex-shrink: 0;
  border-radius: 0.5em;
  background: #FFF;
  box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:not(:last-child) {
    margin-bottom: 1em;
  }

  .name {
    width: 7.0625em;
    height: 2.0625em;
    flex-shrink: 0;
    display: flex;

    p {
      color: #2C2C2C;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.8125em;
      font-style: normal;
      font-weight: 400;
    }
  }

  .price {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875em;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0625em; /* 121.429% */
  }
`;

export const CustomInputWrapper = styled.div` 
  width: 3.325em;
  height: 1.1875em;
  flex-shrink: 0;
  border-radius: 0.25em;
  border: 0.3px solid #BFBFBF;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  
  .value {
    width: 1em;
    height: 0.71875em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-inline: 0.0625em solid #BFBFBF;
    padding-inline: 0.3em;
    
    p {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.6875em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }
  }

  button {
    border: none;
    background: none;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .tooltip {
    position: absolute;
    left: 0;
    top: -1em;
    
    p {
      color: #000;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.5625em;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

`;

interface CloseProps {
    smaller: any
}

export const CloseWrapper = styled.div<CloseProps>`
    width: ${props => props.smaller ? "1.125em" : "2.375em"};
    height: ${props => props.smaller ? "1.125em" : "2.375em"};
    flex-shrink: 0;
    background: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: ${props => props.smaller ? "absolute" : "unset"};
    right: -0.2em;
    top: -0.4em;
  
  button {
      background: transparent;
      border: none;
      color: #FFF;
      font-family: 'Montserrat', sans-serif;
      //font-size: 14px;
      font-size: ${props => props.smaller ? "0.6875em" : "1.375em"};
      font-style: normal;
      font-weight: 500;
    }
`;
