import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Context = () => {
  return (
    <div>
      <h2>Context(useContext)</h2>
      <p>
        <b>Context </b> предоставляет{" "}
        <span style={{ backgroundColor: "#C0C0C0" }}>
          способ передачи данных через компоненты без использования пропсов
        </span>{" "}
        .Полезно, когда необходимо передать данные глубоко в иерархии
        компонентов, избегая {'"'}просачивания{'"'} пропсов через несколько
        промежуточных компонентов.
      </p>
      <p>
        <b>Пропс-дриллинг (props drilling) </b> - это паттерн, который
        возникает, когда компоненту нужно передать данные через несколько
        уровней других компонентов.
      </p>
      <p>
        Value передается через несколько компонентов (хотя GrandParentComponent
        и ParentComponent фактически не использует это значение), чтобы достичь
        конечного компонента, где оно может быть использовано.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`

const GrandParentComponent = ({ value }) => {
  return (
    <ParentComponent value={value} />
  );
}

const ParentComponent = ({ value }) => {
  return (
    <ChildComponent value={value} />
  );
}

const ChildComponent = ({ value }) => {
  return (
    <div>{value}</div>
  );
}
`}
      </SyntaxHighlighter>
      <p>
        Пропс-дриллинг может привести к избыточности и усложнению кода. Чтобы
        избежать проблемы пропс-дриллинга, используют{" "}
        <b style={{ color: "#A52A2A" }}>
          контекст (context), который позволяет передавать данные глубже в
          иерархию компонентов без явного прокидывания свойств через каждый
          уровень.
        </b>
      </p>
      <h3>Использование Context:</h3>
      <h4>Шаг 1: Создание контекста</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`// MyContext.js
import React from 'react';

const MyContext = React.createContext();

export default MyContext;
`}
      </SyntaxHighlighter>
      <h4>Шаг 2: Предоставление значения контекста</h4>
      <p>Предоставляем значение контекста внутри компонента-провайдера.</p>
      <p>
        Компонент-провайдер обертывает дерево компонентов для доступа к
        контексту. Значение value будет доступно всем дочерним компонентам,
        которые подписаны на этот контекст.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`// App.js
import React from 'react';
import MyContext from './MyContext';
import ComponentA from './ComponentA';

const App = () => {
  const value = 'Hello, Context!';

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;
`}
      </SyntaxHighlighter>
      <h4>Шаг 3: Использование хука useContext</h4>
      <p>
        <b>Хук useContext</b> внутри функционального компонента{" "}
        <b>для получения доступа к значению контекста </b>. <br />
        useContext возвращает текущее значение контекста, которое присваиваем
        переменной value. Используем значение value внутри компонента без
        необходимости использования MyContext.Consumer.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`// ComponentA.js
import React, { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
`}
      </SyntaxHighlighter>
      <h4>Шаг 4: Подписка на контекст (еще один вариант)</h4>
      <p>
        Ещё один вариант подписаться на контекст -{" "}
        <b> использование MyContext.Consumer</b>. MyContext.Consumer для
        получения значения контекста и отображения его внутри компонента.
        Значение контекста будет доступно внутри функции-рендерера в виде
        аргумента.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`// ComponentA.js
import React from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <MyContext.Consumer>
        {(value) => (
          <p>Received value from Context: {value}</p>
        )}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
`}
      </SyntaxHighlighter>
    </div>
  );
};
