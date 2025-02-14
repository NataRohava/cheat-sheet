import { useMemo } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import PropTypes from "prop-types";

const Title = styled.h2`
  text-align: center;
`;

const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center; /* Центрирование по горизонтали */
  gap: 10px; /* Расстояние между кнопками */
`;

export const UseMemo = ({ data }) => {
  const processedData = useMemo(() => {
    return data.filter((item) => item % 2 === 0);
  }, [data]);
  return (
    <div>
      <Title>
        <h4 style={{ color: "#A52A2A" }}>Использование хука useMemo </h4>
        <p>Вычисление производительной функции (фильтрация массива)</p>
      </Title>
      <Container>
        {processedData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Container>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`//.....

function App() {
  const dataArray = [
    1, 2,75, 8, 23, 65, 6, 87, 123, 890, 36, 67, 89, 34, 123, 64, 35, 75, 90, 29, 51
  ]
  return (
    <div>
       <Route path = "/usememo" element = {<UsememoPage data = {dataArray}/>}/>
    <div/>
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`//.....
const UsememoPage = ({data}) => {
  const processedData = useMemo(() => {
    return data.filter(item => item % 2 === 0);
  }, [data]); 
  
  return (
    <div>
      {processedData.map((item, index) => (
            <div key={index}>{item}</div>
      ))}
    </div>
`}
      </SyntaxHighlighter>
    </div>
  );
};
UseMemo.propTypes = {
  data: PropTypes.array.isRequired,
};
