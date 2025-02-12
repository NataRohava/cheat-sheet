import React from 'react';
import styled from 'styled-components';
import { HomeOutlined } from '@ant-design/icons';
import reactLogo from './assets/react.svg';
import { Link } from 'react-router-dom';


const HeaderContainer = styled.header`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  line-height: 0px;            
`;
//стилизуем иконку
const HomeIcon = styled(HomeOutlined)` 
  font-size:  23px;
  color: #696969;

  &:hover {
    color: #696969;
  }    
`;
const Logo = styled.img`  
  width:  40px;
  height: 60px;
  animation: logo-spin infinite 20s linear;
`
const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <Link to = "/">{<HomeIcon />}</Link>
      <h2>Теория по библиотеке React</h2>
      <a href="https://react.dev" target="_blank">
        <Logo src={reactLogo} className="logo react" alt="React logo"/>
      </a>     
    </HeaderContainer>
  );
};

export default HeaderComponent;

