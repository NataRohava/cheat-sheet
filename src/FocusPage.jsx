import React, { useState, useEffect, useRef } from 'react';
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

const FocusPage = () => {
  const [text, setText] = useState('');
  const textInput = useRef(null)

  const valid = () => {
    textInput.current.focus()
  }
  const handleChange = (event) => {
    setText(event.target.value)
  }

 
  return (
    <div>
      <Title style = {{color: '#A52A2A'}}>Использование хука useRef для управления фокусом</Title>
      
      
      <Container>
      
        <input ref = {textInput} value = {text} onChange = {handleChange}/>
        <Button onClick = {()=>valid()}>Click to focus</Button> 
      </Container>
      
       

             
    </div>                           
  );
};
export default FocusPage;