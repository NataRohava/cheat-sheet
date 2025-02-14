import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from "react-router-dom";

export const Refs = () => {
  return (
    <div>
      <h2>Refs(ссылки)</h2>
      <p>
        <b>Refs(ссылки)</b> - представляют{" "}
        <span style={{ backgroundColor: "#C0C0C0" }}>
          способ доступа к DOM-узлам или React-элементам
        </span>
        , созданным в методе render().
      </p>
      <p>
        Наиболее часто используются для:
        <ul>
          <li>
            управления фокусом{" "}
            <span style={{ fontStyle: "italic" }}>
              (элемент получает фокус,когда пользователь кликает по нему или
              использует клавишу Tab)
            </span>{" "}
            , выделения текста;
          </li>
          <li>выполнения анимаций;</li>
          <li>
            интеграции со сторонними библиотеками, взаимодействующие с DOM.
          </li>
        </ul>
      </p>
      <h3>Хук useRef</h3>
      <p>
        <b style={{ color: "#A52A2A" }}>useRef</b> - хук React,который позволяет
        сохранять мутабельные значения между рендерами компонента,не вызывая
        повторный рендеринг при изменении.
        <br />
        Принимает один параметр,начальное значение initialValue,к-е
        устанавливается в current. Это значение будет доступно через свойство
        .current.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {` const myRef = useRef(initialValue)`}
      </SyntaxHighlighter>
      <h3>Управление фокусом</h3>

      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useEffect, useState, Fragment, useRef } from 'react'

const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test
`}
      </SyntaxHighlighter>
      <p>
        Можно фокус вызвать в useEffect. После монтирования компонента, этот
        фокус автоматически установиться.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useEffect, useRef } from 'react'

const Test = () => {
    const inputRef = useRef(null)
    useEffect (() => {
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef} type='text' />    
        </div>
    )
}
export default Test
`}
      </SyntaxHighlighter>
      <h3>
        <Link to="/focus">Пример управления фокусом</Link>
      </h3>
    </div>
  );
};
