import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from "react-router-dom";

export const State = () => {
  return (
    <div>
      <h2>State (useState)</h2>
      <p>
        <b>Состояние (state)</b> - это данные, которые используются внутри
        компонента для отображения и обновления информации. Позволяет
        реагировать на события и обновлять компонент в соответствии с новыми
        данными.{" "}
        <span style={{ backgroundColor: "#C0C0C0" }}>
          Это то,что изменяется в компоненте
        </span>
        .
      </p>
      <p>
        <h3>State в функциональной компоненте</h3>
        Хук <b>useState</b> возвращает массив с парой значений:
        <ul>
          <li>
            <b style={{ color: "#A52A2A" }}>state</b>: текущее значение
            состояния.
          </li>
          <li>
            <b style={{ color: "#A52A2A" }}>setState</b>: функция для обновления
            значения состояния, меняет наш state. Может принимать значение или
            функцию, которая вычисляет новое значение состояния на основе
            предыдущего состояния.
          </li>
        </ul>
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useState } from 'react';

const [state, setState] = useState(initialState);
`}
      </SyntaxHighlighter>
      <h3>Примеры использования state в компонентах</h3>
      <p>
        <h4>Отслеживание текущего счетчика</h4>
        Компонент будет отображать текущее значение счетчика, а при нажатии на
        кнопку счетчик будет увеличиваться.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};
`}
      </SyntaxHighlighter>

      <h4>Управление отображением элементов</h4>
      {`Клик на кнопку->вызывается событие onClick->
      которое вызывает ф-цию handleClick->
      которая вызывает ф-цию setShowText->
      изменяет showText,наш state, на противоположный->
      true-показывает или false-скрывает текст.`}
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useState } from "react";

const Example = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText((showText) => !showText);
  };

  return (
    <div>
      <button onClick={handleClick}>Показать/скрыть текст</button>
      {showText && <p>Этот текст может быть скрыт или показан</p>}
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <h4>Управление input-ом</h4>
      <p>
        State с начальным значением пустой строки,присвоили переменной name.
        Когда значение поля изменяется,в инпуте по событию onChange,то
        вызывается handleChange. Которая использует setName для обновления
        переменной состояния name данными (event.target.value),которые ввел
        пользователь.
      </p>

      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useState } from 'react';

const Example = () => {
  
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
      <label>
        Введи свое имя:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Привет, {name}!</p>
    </div>
  );
}
`}
      </SyntaxHighlighter>
      <h4>Управление стилями</h4>
      <p>
        State с начальным значением {'"'}red {'"'},присвоили его переменной
        color. Функция handleClick вызывается при клике на кнопку, использует
        функцию setColor для изменения state. Объект style для установки цвета
        текста, который зависит от значения state.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useState } from 'react';

const Example = () => {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  }

  const style = {
    color: color
  };

  return (
    <div>
      <button onClick={handleClick}>Сменить цвет</button>
      <p style={style}>Этот текст может быть красным или синим</p>
    </div>
  );
}
`}
      </SyntaxHighlighter>
      <h3>Передача state в дочерние компоненты при помощи props</h3>
      <p>
        Состояние счетчика хранится в родительском компоненте ParentComponent, а
        значение состояния передается в дочерний компонент ChildComponent через
        пропсы.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const ChildComponent = ({ count }) => {
  return <p>Счетчик: {count}</p>;
};
`}
      </SyntaxHighlighter>
      <h3>State и объект в качестве состояния</h3>
      <p>
        При обновлении объекта в состоянии нужно создавать новый объект вместо
        изменения существующего, чтобы соблюсти принцип неизменяемости.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Введите ваше имя"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Введите ваш возраст"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Введите вашу почту"
      />
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
`}
      </SyntaxHighlighter>
      <h3>Асинхронное поведение функции-setter setState</h3>
      <p>
        При вызове setState, React не обновляет состояние и{" "}
        <span style={{ backgroundColor: "#C0C0C0" }}>
          не рендерит компонент немедленно
        </span>
        . Помещает обновление в очередь. Затем{" "}
        <span style={{ backgroundColor: "#C0C0C0" }}>
          применяет все обновления состояния за один раз
        </span>{" "}
        перед следующим рендером компонента.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  //три вызова setCount объединяются в одно обновление, и в итоге count 
  //увеличится только на 1.

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
`}
      </SyntaxHighlighter>
      <p>
        <b style={{ color: "#A52A2A" }}>
          Корректное обновление состояния на основе предыдущего значения!
        </b>
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`//prevCount будет обновлено каждый раз, и состояние count увеличится на 3

const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};
`}
      </SyntaxHighlighter>
      <h3>State в классовой компоненте</h3>
      <p>
        <b style={{ color: "#A52A2A" }}>State</b> создается в
        <span style={{ backgroundColor: "#C0C0C0" }}>конструкторе</span>{" "}
        компонента. Метод <b style={{ color: "#A52A2A" }}>setState</b>{" "}
        используется для обновления состояния компонента.Используется функция,
        текущее состояние state в качестве аргумента,которая возвращает новый
        объект с обновлениями.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`
this.setState({ count: this.state.count + 1 });

this.setState((state)=> { count: state.count + 1 });
`}
      </SyntaxHighlighter>

      <p>
        <b style={{ color: "#A52A2A" }}>
          Когда СЛЕДУЮЩЕЕ СОСТОЯНИЕ ЗАВИСИТ ОТ ПРЕДЫДУЩЕГО, используем CALLBACK
          ФУНКЦИЮ, а не объект в качестве первого параметра у setState()!
        </b>
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`class Example extends React.Component {
    constructor() {
        this.state = { count: 0 }
    }

    handleClick = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    }

    render() {
        return (
            <div>
                <p>Ты кликнул {this.state.count} раз</p>
                <button onClick={handleClick}>Кликни сюда</button>
            </div>
        );
    }
}
`}
      </SyntaxHighlighter>
      <h3>
        <Link to="/counter">Счётчик как пример работы со state</Link>
      </h3>
    </div>
  );
};
