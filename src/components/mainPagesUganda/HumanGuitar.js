import React from "react";
import styled from "styled-components";
import human from "../../img/humanGuitar.png";
const HumanGuitar = () => {
  const MainPreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 150px;
  `;
  const Img = styled.img`
    height: 400px;
  `;
  const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;
  `;
  const TextLogin = styled.p`
    font-size: 48px;
    font-weight: bold;
  `;
  const Text = styled.p`
    font-size: 26px;
    margin-top: -30px;
  `;
  return (
    <MainPreview>
      <DivText>
        <TextLogin>InEducation</TextLogin>
        <Text>Делай легче, смотри шире</Text>
      </DivText>
      <Img src={human} />
    </MainPreview>
  );
};

export default HumanGuitar;
