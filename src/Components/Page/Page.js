import styled from "styled-components";

export default function Page({ children }) {
  return <Container>{children}</Container>;
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 30px;
`;
