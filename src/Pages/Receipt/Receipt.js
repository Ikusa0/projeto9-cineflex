import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import LinkButton from "../../Components/LinkButton/LinkButton";
import Page from "../../Components/Page/Page";

export default function Home() {
  const location = useLocation();
  const data = location.state;

  function ReceiptDescription() {
    return (
      <Container>
        <h1>Pedido feito com sucesso!</h1>
        <h2>Filme e Sessão</h2>
        <ul>
          <li>{data.movie.title}</li>
          <li>{data.session}</li>
        </ul>
        <h2>Ingressos</h2>
        <ul>
          {data.tickets.map((ticket, index) => (
            <li key={index}>{ticket}</li>
          ))}
        </ul>
        <h2>Comprador</h2>
        <ul>
          <li>Nome: {data.buyer.name}</li>
          <li>CPF: {data.buyer.cpf}</li>
        </ul>
        <div className="button-container">
          <LinkButton width="225px" path="/">
            Voltar pra Home
          </LinkButton>
        </div>
      </Container>
    );
  }

  return (
    <Page>
      <Header />
      <ReceiptDescription />
    </Page>
  );
}

const Container = styled.div`
  padding-top: 45px;
  width: 100%;
  max-width: 315px;

  h1 {
    padding: 0 70px;
    padding-bottom: 10px;
    text-align: center;
    font-family: inherit;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247a6b;
  }

  h2 {
    margin-top: 40px;

    font-family: inherit;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;

    color: #293845;
  }

  ul {
    margin-top: 10px;
  }

  ul:last-of-type {
    margin-bottom: 80px;
  }

  li {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
