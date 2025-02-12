import React from 'react';
import styled from 'styled-components';
import roadMap from '/roadmap.jpeg';



//100%-ширина от родит.контейнера,длина-автоматически подстраивается,
//ограничиваем макс.ширину
const Map = styled.img`
  width:  100%;
  height: auto;
  max-width:910px;  
`
const HomePage = () => {
  return (
    <div>
      <Map src = {roadMap} alt = "Road map"/>
      
    </div>     
  );
};
export default HomePage;
