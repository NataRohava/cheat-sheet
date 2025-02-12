import React, { useState } from 'react';
import {  Button  } from 'antd';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
`;
// Создаем стилизованный контейнер
const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center; /* Центрирование по горизонтали */
  gap: 10px; /* Расстояние между кнопками */
`;

const CounterPage = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount ((count) => count + 1)
  }
  const decrement = () => {
    setCount ((count) => count - 1)
  }
  return (
    <div>
      <Title style = {{color: '#A52A2A'}}>Counter</Title>
      <Container>
        <Button onClick = {increment}>Увеличить</Button>
        <p>Счетчик: {count}</p>
        <Button onClick = {decrement}>Уменьшить</Button> 
      </Container>
             
    </div>                           
  );
};
export default CounterPage;