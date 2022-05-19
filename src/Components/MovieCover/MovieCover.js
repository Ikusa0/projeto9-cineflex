import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MovieCover({ cover, title, id }) {
  return (
    <Container>
      <Link to={`/sessions/${id}`}>
        <img src={cover} alt={title} />
      </Link>
    </Container>
  );
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.div`
  width: 145px;
  height: 209px;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
