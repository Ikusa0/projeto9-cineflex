import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import LinkButton from "../LinkButton/LinkButton";

function Form({ label, placeholder, id }) {
  return (
    <StyledForm>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </StyledForm>
  );
}

function SeatDescription({ text, isAvailable, isSelected }) {
  return (
    <div>
      <Seat descriptive={true} isAvailable={isAvailable} isSelected={isSelected} />
      <span>{text}</span>
    </div>
  );
}

export default function SeatsCatalogue() {
  const [session, setSession] = useState(null);
  const { idSession } = useParams();

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
    promise.then((response) => {
      setSession(response.data);
    });
  }, [idSession]);

  return (
    <>
      {session ? (
        <Container>
          <h1>Selecione o filme</h1>
          <SeatContainer>
            {session.seats.map((seat, index) => (
              <Seat key={index} isAvailable={seat.isAvailable}>
                {seat.name}
              </Seat>
            ))}
          </SeatContainer>
          <SeatDescriptionContainer>
            <SeatDescription text="Selecionado" isAvailable={true} isSelected={true} />
            <SeatDescription text="Disponível" isAvailable={true} />
            <SeatDescription text="Indisponível" isAvailable={false} />
          </SeatDescriptionContainer>
          <Form label="Nome do comprador:" placeholder="Digite seu nome..." id="1" />
          <Form label="Nome do comprador:" placeholder="Digite seu CPF..." id="2" />
          <LinkButton url="/">Reservar assento(s)</LinkButton>
          <Footer movieCover={session.movie.posterURL} movieTitle={session.movie.title} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

// ================================ STYLED COMPONENTS ================================ //
const Container = styled.div`
  padding-top: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-family: inherit;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 35px;
  }
`;

const SeatContainer = styled.div`
  width: 100%;
  max-width: 327px;
  height: 203px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-self: center;
`;

const Seat = styled.button`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  background: ${(props) => (props.isAvailable ? (props.isSelected ? "#8dd7cf" : "#c3cfd9") : "#fbe192")};
  border: 1px solid ${(props) => (props.isAvailable ? (props.isSelected ? "#45bdb0" : "#808f9d") : "#f7c52b")};
  border-radius: 12px;
  margin-right: ${(props) => (props.descriptive ? 0 : "6px")};
  margin-bottom: ${(props) => (props.descriptive ? "10px" : 0)};

  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: black;

  cursor: ${(props) => (props.descriptive ? "default" : "pointer")};
`;

const SeatDescriptionContainer = styled.div`
  width: 100%;
  max-width: 327px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 45px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;

    color: #4e5a65;
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  &:last-of-type {
    margin-bottom: 50px;
  }

  label {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    margin-bottom: 3px;
  }

  input {
    width: 327px;
    height: 51px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding-left: 18px;
    color: #e8833a;
  }

  input::placeholder {
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #afafaf;
  }
`;
