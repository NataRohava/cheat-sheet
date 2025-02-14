import { useState, useEffect } from "react";
import { Button } from "antd";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Title = styled.h2`
  text-align: center;
`;
const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center; /* Центрирование по горизонтали */
  gap: 10px; /* Расстояние между кнопками */
`;

export const DidUpdate = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Счетчик изменен на: ${count}`);
  }, [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <Title style={{ color: "#A52A2A" }}>ComponentDidUpdate</Title>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {` 
useEffect(() => { console.log("componentDidUpdate") }, [dependency])
`}
      </SyntaxHighlighter>
      <p>
        <b>
          Когда count изменяется, useEffect обновляет состояние message,
          отображая новое сообщение о счетчике
        </b>{" "}
        .
      </p>
      <Container>
        <Button onClick={increment}>Увеличить</Button>
        <p>{message}</p>
        <Button onClick={decrement}>Уменьшить</Button>
      </Container>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(\`Счетчик изменен на: \${count}\`);
  }, [count]); 
  const increment = () => {
    setCount ((count) => count + 1)
  }
  const decrement = () => {
    setCount ((count) => count - 1)
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>

    </div>
  );
};

export default Example;
`}
      </SyntaxHighlighter>
    </div>
  );
};
