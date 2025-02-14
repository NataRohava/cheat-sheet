import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Components = () => {
  return (
    <div>
      <h2>Components</h2>
      <p>
        <b>Компоненты</b> - это небольшие, переиспользуемые элементы
        пользовательского интерфейса, которые объединены вместе, чтобы создать
        более крупные приложения. Компоненты позволяют разбить интерфейс на
        независимые части.
      </p>
      <p>
        Во многом <b>компоненты ведут себя как обычные функции JavaScript</b>.
        Они принимают произвольные входные данные (так называемые «пропсы») и
        возвращают React-элементы, описывающие, что мы хотим увидеть на экране.
        Компоненты как кирпичики из которых строится приложение.
      </p>
      <p>
        React компоненты могут быть <b>классовыми</b> или <b>функциональными</b>
        .
      </p>
      <p>
        Объявление <b>классового</b> компонента в React:
      </p>
      <p>
        <SyntaxHighlighter language="javascript" style={a11yLight}>
          {`class MyComponent extends React.Component {
    render() {
      return <div>Hello, Redev!</div>;
    }
}
export default MyComponent;`}
        </SyntaxHighlighter>
        Классовый компонент наследуется от базового класса{" "}
        <b style={{ color: "#A52A2A" }}>React.Component</b> и имеет доступ к
        дополнительным функциям, таким как состояние и методы жизненного цикла.
      </p>

      <p>
        Объявление <b>функционального</b> компонента в React:
      </p>
      <p>
        <SyntaxHighlighter language="javascript" style={a11yLight}>
          {`const MyComponent = () => {
  return <div>Hello, Redev!</div>;
}
export default MyComponent;
`}
        </SyntaxHighlighter>
        Сейчас для объявления компонент используется функциональный подход.
      </p>
      <p>
        <b>Компонента должна себя вести как чистая функция</b>:
        <ol>
          <li>
            Для одинаковых входных данных всегда возвращает один результат.
          </li>
          <li>
            Не имеет побочных эффектов (то есть не изменяет внешние состояния).
          </li>
          <li>Не зависит от внешних состояний.</li>
        </ol>
      </p>
      <p>
        <h3>Stateless VS Stateful</h3>
        <p>
          <b>Stateless компоненты</b>
        </p>
        Принимают props и возвращают JSX, который описывает, как должен
        выглядеть UI. Эти компоненты{" "}
        <span style={{ backgroundColor: "#C0C0C0" }}>
          не имеют внутреннего состояния
        </span>
        и не могут изменять свое поведение в зависимости от событий или действий
        пользователя (просто рендерят UI).
      </p>
      <p>
        <SyntaxHighlighter language="javascript" style={a11yLight}>
          {`const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};
`}
        </SyntaxHighlighter>
      </p>
      <p>
        Компонент <b style={{ color: "#A52A2A" }}>Greeting</b> принимает проп{" "}
        <b style={{ color: "#A52A2A" }}>name</b> и отображает приветствие. Он не
        хранит состояние и не изменяется с течением времени.
      </p>
      <p>
        <p>
          <b>Stateful компоненты</b>
        </p>
        Stateful компоненты могут{" "}
        <span style={{ backgroundColor: "#C0C0C0" }}>
          управлять состоянием и изменять свое поведение
        </span>{" "}
        в зависимости от событий. Они используют внутреннее состояние, чтобы
        отслеживать изменения и обновлять UI (изменяют своё поведение в ответ на
        события).
      </p>
      <p>
        Можно создавать stateful функциональные компоненты с помощью хуков{" "}
        <b style={{ color: "#A52A2A" }}>useState и useEffect</b>.
      </p>
      <p>
        <SyntaxHighlighter language="javascript" style={a11yLight}>
          {`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
`}
        </SyntaxHighlighter>
      </p>
      <p>
        P.s.: Название компонента с <b>большой буквы</b>. Функцию называем
        также,как и компонент!
      </p>
    </div>
  );
};
