import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCover from "../MovieCover/MovieCover";
import Loading from "../Loading/Loading";

export default function MovieCatalogue() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promise.then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Selecione o filme</h1>
      <MovieContainer>
        {movies ? (
          movies.map((movie, index) => (
            <MovieCover cover={movie.posterURL} title={movie.title} id={movie.id} key={index} />
          ))
        ) : (
          <Loading />
        )}
      </MovieContainer>
    </Container>
  );
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.div`
  padding-top: 45px;
  width: 100%;
  max-width: 315px;

  h1 {
    text-align: center;
    font-family: inherit;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 35px;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    margin-bottom: 12px;
  }
`;
