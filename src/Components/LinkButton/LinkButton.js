import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LinkButton({ url, children }) {
  return (
    <Container>
      <Link to={url}>{children}</Link>
    </Container>
  );
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.button`
  height: 43px;
  border: none;
  background-color: #e8833a;
  border-radius: 3px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-right: 8px;
  padding: 0 18px;
`;
