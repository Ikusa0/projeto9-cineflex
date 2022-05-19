import styled from "styled-components";
import MovieCoverSmall from "../MovieCoverSmall/MovieCoverSmall";

export default function Footer({ movieCover, movieTitle }) {
  return (
    <Container>
      <MovieCoverSmall cover={movieCover} title={movieTitle} />
      <span>{movieTitle}</span>
    </Container>
  );
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 117px;
  padding: 15px 10px;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  box-sizing: border-box;

  span {
    margin-left: 15px;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
  }
`;
