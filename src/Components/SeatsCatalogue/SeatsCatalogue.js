import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import LinkButton from "../LinkButton/LinkButton";

function Input({ label, value, onChange, placeholder, id }) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChange ? onChange : () => {}}
        value={value ? value : ""}
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </StyledInput>
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
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [seats, setSeats] = useState(null);
  const { idSession } = useParams();

  const [cpf, setCpf] = useState(null);
  const [name, setName] = useState(null);

  function toggleSeat(index) {
    if (!seats[index].isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }
    const newSeats = [...seats];
    newSeats[index].isSelected = !newSeats[index].isSelected;
    setSeats(newSeats);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const selectedSeats = seats.filter((seat) => seat.isSelected);
    const ids = selectedSeats.map((seat) => seat.id);

    if (ids.length === 0) {
      alert("Selecione ao menos um assento!");
      return;
    }

    const data = {
      movie: {
        title: session.movie.title,
      },
      session: `${session.day.date} ${session.name}`,
      tickets: selectedSeats.map((seat) => `Assento ${seat.name}`),
      buyer: { name, cpf },
    };

    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
      ids,
      name,
      cpf: cpf.replace(/\D/g, ""),
    });
    promise.then(() => {
      navigate("/success", { state: data });
    });
  }

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
    promise.then((response) => {
      setSeats(response.data.seats.map((seat) => ({ ...seat, isSelected: false })));
      setSession(response.data);
    });
  }, [idSession]);

  return (
    <>
      {session ? (
        <Container>
          <h1>Selecione o filme</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <SeatContainer>
              {seats.map((seat, index) => (
                <Seat
                  onClick={() => {
                    toggleSeat(index);
                  }}
                  key={index}
                  isAvailable={seat.isAvailable}
                  isSelected={seat.isSelected}
                  value={seat.name}
                />
              ))}
            </SeatContainer>
            <SeatDescriptionContainer>
              <SeatDescription text="Selecionado" isAvailable={true} isSelected={true} />
              <SeatDescription text="Disponível" isAvailable={true} />
              <SeatDescription text="Indisponível" />
            </SeatDescriptionContainer>
            <Input
              onChange={(e) => setName(e.target.value)}
              label="Nome do comprador:"
              placeholder="Digite seu nome..."
              id="name"
              value={name}
            />
            <Input
              onChange={(e) =>
                setCpf(
                  e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                    .substring(0, 14)
                )
              }
              label="CPF do comprador:"
              placeholder="Digite seu CPF..."
              id="cpf"
              value={cpf}
            />
            <LinkButton type="submit">Reservar assento(s)</LinkButton>
            <Footer movieCover={session.movie.posterURL} movieTitle={session.movie.title} />
          </form>
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

const Seat = styled.input.attrs({
  type: "button",
})`
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

const StyledInput = styled.div`
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
