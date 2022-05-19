import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <span>CINEFLEX</span>
    </Container>
  );
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;

  span {
    font-family: inherit;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
  }
`;
