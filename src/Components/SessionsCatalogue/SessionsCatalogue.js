import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

function SessionTime({ time, id }) {
  return (
    <Button>
      <Link to={`/seats/${id}`}>{time}</Link>
    </Button>
  );
}

function DaySessions({ weekday, date, sessionsTimes }) {
  return (
    <DaySessionsContainer>
      <h2>{`${weekday} - ${date}`}</h2>
      <div>
        {sessionsTimes.map((session, index) => (
          <SessionTime time={session.name} id={session.id} key={index} />
        ))}
      </div>
    </DaySessionsContainer>
  );
}

export default function MovieCatalogue() {
  const [sessions, setSessions] = useState(null);
  const { idMovie } = useParams();

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
    promise.then((response) => {
      setSessions(response.data);
    });
  }, [idMovie]);

  return (
    <Container>
      <h1>Selecione o horário</h1>
      <SessionsContainer>
        {sessions ? (
          sessions.days.map((session, index) => (
            <DaySessions weekday={session.weekday} date={session.date} sessionsTimes={session.showtimes} key={index} />
          ))
        ) : (
          <Loading />
        )}
      </SessionsContainer>

      {sessions ? <Footer movieCover={sessions.posterURL} movieTitle={sessions.title} /> : <></>}
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
  }
`;

const SessionsContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 142px;
`;

const DaySessionsContainer = styled.div`
  margin-bottom: 25px;

  h2 {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
  }

  div {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  width: 83px;
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
`;
