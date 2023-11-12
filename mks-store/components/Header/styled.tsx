import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100vw;
  background: #0F52BA;
  //height: 6.3125em;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const NameWrapper = styled.div`
  display: flex;
  align-items: end;
  width: 12em;
  height: 2.4375em;
  flex-shrink: 0;
  margin-left: 5em;

  .big {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5em;
    font-style: normal;
    font-weight: 600;
  }
  .smaller {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25em;
    font-style: normal;
    font-weight: 300;
    line-height: 1.750em;
    margin-left: 0.5em;
  }
`

export const CartWrapper = styled.div`
  width: 5.625em;
  height: 2.8125em;
  flex-shrink: 0;
  border-radius: 0.5em;
  background: #FFF;
  margin-right: 5em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .amount {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.125em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
