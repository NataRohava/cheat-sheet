import { useState, useRef } from "react";
import { Button } from "antd";
import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
`;
const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center; /* Центрирование по горизонтали */
  gap: 10px; /* Расстояние между кнопками */
`;

export const Focus = () => {
  const [text, setText] = useState("");
  const textInput = useRef(null);

  const valid = () => {
    textInput.current.focus();
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Title style={{ color: "#A52A2A" }}>
        Использование хука useRef для управления фокусом
      </Title>

      <Container>
        <input ref={textInput} value={text} onChange={handleChange} />
        <Button onClick={() => valid()}>Click to focus</Button>
      </Container>
    </div>
  );
};
