import styled from "styled-components";

export const BodyWrapper = styled.main`
    width: 100vw;
    height: 87vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F9F9F9;
`;

export const ContentWrapper = styled.section`
  width: 58.625em;
  height: 37.5625em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemWrapper = styled.div`
  width: 13.625em;
  height: 17.8125em;
  flex-shrink: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5em;
  box-shadow: 0 0.125em 0.5em 0 rgba(0, 0, 0, 0.14);
  overflow: hidden;

  img {
    max-width: 90%;
    max-height: 8.625em;
  }

  .itemDetails {
    width: 12em;
    max-height: 4.4375em;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .title {
      max-width: 7.425em;
      height: 2.375em;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        color: #2C2C2C;
        font-family: 'Montserrat', sans-serif;
        font-size: 1em;
        font-style: normal;
        font-weight: 400;
      }
    }

    .price {
      min-width: 4em;
      height: 1.625em;
      flex-shrink: 0;
      border-radius: 0.3125em;
      background: #373737;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.2em;

      p {
        color: #FFF;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9375em;
        font-style: normal;
        font-weight: 700;
      }
    }

  }

  .itemDescription {
    width: 12em;
    min-height: 1.5625em;
    flex-shrink: 0;

    p {
      color: #2C2C2C;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.625em;
      font-style: normal;
      font-weight: 300;
    }
  }

  .buy {
    width: 13.625em;
    height: 1.9941875em;
    border-radius: 0 0 8px 8px;
    background: #0F52BA;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #FFF;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.875em;
      font-style: normal;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;
