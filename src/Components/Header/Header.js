import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function Header({ withIcon }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <Container>
      {withIcon ? <ion-icon onClick={handleClick} class="md hydrated icon" name="arrow-undo"></ion-icon> : ""}
      <Link to="/">
        <span>CINEFLEX</span>
      </Link>
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
  color: #e8833a;

  span {
    font-family: inherit;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: inherit;
  }

  .icon {
    font-size: 28px;
    position: fixed;
    top: 33.5px;
    left: 10px;
    transform: translateY(-50%);
  }
`;
