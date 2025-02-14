import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from "react-router-dom";

export const Memo = () => {
  return (
    <div>
      <h2>React.memo</h2>
      <p>
        <b>React.memo </b> - функция высшего порядка (Higher Order Component)
        <span style={{ backgroundColor: "#C0C0C0" }}>
          , которая оптимизирует производительность функциональных компонентов
        </span>
        .
        <b>
          Она предназначена для предотвращения ненужного повторного рендеринга
          компонента, когда его пропсы и состояние не изменились
        </b>
        .
      </p>
      <p>
        По умолчанию, при каждом изменении состояния или пропсов компонент
        перерисовывается, даже если результирующий визуальный вывод не
        изменился. <br />
        <b style={{ color: "#A52A2A" }}>
          React.memo использует механизм мемоизации, чтобы запоминать предыдущий
          результат рендеринга компонента и сравнивать его с текущими пропсами.
        </b>
        Если пропсы не изменились, React.memo предотвращает повторный рендеринг
        компонента, возвращая сохраненный результат.
        <br />
        Использование React.memo позволяет сократить количество повторных
        рендеров и улучшить производительность приложения. Компонент будет
        перерисовываться только при изменении пропсов.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React from 'react';

const MyComponent = React.memo((props) => {
  
  return (
    <div>
      {props.text}
    </div>
  );
});
`}
      </SyntaxHighlighter>
      <p>
        React.memo также принимает
        <b>
          {" "}
          второй необязательный аргумент в виде функции сравнения
          (compareFunction)
        </b>
        , которая позволяет контролировать, какие пропсы должны считаться
        равными. Если функция сравнения не указана, React.memo будет
        использовать поверхностное сравнение (shallow comparison) для сравнения
        пропсов.
        <br />
        Компонент будет перерисовываться только при изменении пропсов с помощью
        compareFunction.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React from 'react';

const MyComponent = React.memo((props) => {
  
  return (
    <div>
      {props.text}
    </div>
  );
}, (prevProps, nextProps) => {
});
`}
      </SyntaxHighlighter>
      <h3>useMemo</h3>
      <p>
        <b>useMemo</b> предназначен для
        <b style={{ color: "#A52A2A" }}>
          {" "}
          мемоизации вычислений в функциональных компонентах
        </b>
        . Он позволяет сохранять результат вычислений и повторно использовать
        его, если входные значения (зависимости) не изменились.
      </p>
      <p>
        <b>Вычисление производительной функции:</b>
      </p>
      <p>
        Вычисления processData будут сохраняться и пересчитываться только при
        изменении значения пропса data. Если data не изменилось, будет
        использован сохраненный результат.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => {
    return processData(data);
  }, [data]); // Зависимость - значение пропса "data"

  return (
    <div>
      {processedData}
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <p>
        <b>Кэширование компонента:</b>
      </p>
      <p>
        Компонент ExpensiveComponent будет пересоздаваться только при изменении
        пропсов propA или propB. MyComponent будет кэширован при каждом
        изменении propA или propB.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useMemo } from 'react';
const ExpensiveComponent = ({ propA, propB }) => {
  
  return (
    // ...
  );
};

const MyComponent = ({ data }) => {
  const cachedComponent = useMemo(() => {
    return <ExpensiveComponent propA={propA} propB={propB} />;
  }, [propA, propB]);

  return (
    <div>
      {cachedComponent}
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <h3>useCallback</h3>
      <p>
        <b>Хук useCallback()</b> работает похожим образом как useMemo, только
        уже мемоизирует не результат вызова переданной функции, а саму функцию.
        Это позволяет немного сократить код и избавиться от лишних объявлений
        функций.
      </p>
      <p>
        Хук useCallback принимает два параметра:
        <ol>
          <li>
            <b>Callback-функция: </b> функция, которую мы хотим мемоизировать.
            Когда этот сallback вызывается, useCallback возвращает эту же
            функцию, если зависимости не изменились.
          </li>
          <li>
            <b>Массив зависимостей: </b> массив значений, от которых зависит
            сallback-функция. Если хотя бы одно из значений в массиве изменится,
            хук useCallback вернет новую мемоизированную версию колбэка. Если
            массив пустой, то колбэк будет создан только один раз, при первом
            рендере компонента.
          </li>
        </ol>
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b],
);
`}
      </SyntaxHighlighter>
      <p>
        <b>useCallback</b> создает мемоизированную версию функции doSomething, и
        эта версия будет обновляться только в случае изменения значений a или b.
        Если a и b не изменятся между рендерами компонента, то useCallback
        вернет ту же самую мемоизированную функцию.
      </p>
      <h3>
        <Link to="/usememo">
          Использование хука useMemo для мемоизации вычислений
        </Link>
      </h3>
    </div>
  );
};
