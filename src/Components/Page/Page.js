import styled from "styled-components";

export default function Page({ children, hasFooter }) {
  return <Container hasFooter={hasFooter}>{children}</Container>;
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 24px;
  margin-bottom: ${(props) => (props.hasFooter ? "142px" : 0)};
`;
