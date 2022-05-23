import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import LinkButton from "../LinkButton/LinkButton";

function SessionTime({ time, id }) {
  return <LinkButton path={`/seats/${id}`}>{time}</LinkButton>;
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

export default function SessionsCatalogue() {
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
      <div>
        {sessions ? (
          sessions.days.map((session, index) => (
            <DaySessions weekday={session.weekday} date={session.date} sessionsTimes={session.showtimes} key={index} />
          ))
        ) : (
          <Loading />
        )}
      </div>

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
    margin-bottom: 35px;
  }
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
