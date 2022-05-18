import "./sessionscatalogue.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

function SessionTime({ time }) {
  return <button>{time}</button>;
}

function DaySessions({ weekday, date, sessionsTimes }) {
  return (
    <div className="day-sessions">
      <h2>{`${weekday} - ${date}`}</h2>
      <div className="sessions-times-container">
        {sessionsTimes.map((session, index) => (
          <SessionTime time={session.name} key={index} />
        ))}
      </div>
    </div>
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
  }, []);

  return (
    <div className="sessions-catalogue">
      <h1>Selecione o horário</h1>
      <div className="sessions-container">
        {sessions ? (
          sessions.days.map((session, index) => (
            <DaySessions weekday={session.weekday} date={session.date} sessionsTimes={session.showtimes} key={index} />
          ))
        ) : (
          <Loading />
        )}
      </div>

      {sessions ? <Footer movieCover={sessions.posterURL} movieTitle={sessions.title} /> : <></>}
    </div>
  );
}
