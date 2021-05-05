import { useState } from "react";
import api from "./services/api";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

const Card = styled.div`
  background: #74b0ff;
  box-shadow: 0 16px 22px -16px rgb(15 50 86 / 32%);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
`;

const Button = styled.button`
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.01em;
  text-decoration: none;
  background: #535efa;
  border-radius: 8px;
  color: #fff;
  padding: 12px 21px;
  border-style: none;
`;

const Input = styled.input`
  background-color: rgb(238, 234, 244);
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
  color: rgb(69, 42, 122);
  display: block;
  font-size: 16px;
  height: 40px;
  outline: 0px;
  padding: 0px 16px;
  margin-bottom: 1rem;
`;

function App() {
  const [domain, setDomain] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const search = () => {
    setLoading(true);
    api
      .get("/check", {
        params: {
          domain,
        },
      })
      .then(({ data }) => {
        setResponse(data.exists ? "Dominio ja existe" : "Dominio nao existe");
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  return (
    <main>
      <Wrapper>
        <Title>Dash domain finder</Title>

        <Card>
          <Input
            type="text"
            placeholder="Digite o dominio a ser pesquisado"
            onChange={(e) => setDomain(e.target.value)}
          />
          <Button onClick={search}>Pesquisar</Button>
          <br />
          {loading && (
            <>
              <span>Carregando</span> <br></br>
            </>
          )}
          {response && <span>{response}</span>}
        </Card>
      </Wrapper>
    </main>
  );
}

export default App;
