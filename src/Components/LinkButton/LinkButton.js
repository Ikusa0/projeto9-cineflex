import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LinkButton({ path, type, children }) {
  return path ? (
    <Link to={path}>
      <Container type={type}>{children}</Container>
    </Link>
  ) : (
    <Container type={type}>{children}</Container>
  );
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.button.attrs((props) => ({
  type: props.type ? props.type : "",
}))`
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
