import styled from "styled-components";

export default function MovieCover({ cover, title }) {
  return (
    <Container>
      <img src={cover} alt={title} />
    </Container>
  );
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.div`
  width: 64px;
  height: 89px;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
