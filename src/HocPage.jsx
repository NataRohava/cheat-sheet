import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';




const HocPage = () => {
  return (
    <div>
      <h2>HOС (Higher-Order Components)</h2>
      <p>
         <b style = {{color: '#A52A2A'}}>Higher Order Components (HOC)</b> - паттерн, позволяющий <b>повысить 
          переиспользуемость компонентов и управление состоянием</b> .
      </p>
      <p>
      <b style = {{color: '#A52A2A'}}>HOC </b> - это функции высшего порядка, которые принимают 
      компонент и возвращают новый компонент с расширенным функционалом <span style ={{fontStyle:'italic'}}>(позволяют 
      добавлять функциональность к компонентам без изменения их кода) </span>. 
      </p>
      <h3> Проблемы, которые решает HOC</h3>
      <ol>
        <li>
          <b>Логическое переиспользование:</b> позволяют выделить общую логику компонентов, такую как 
          <span style ={{fontStyle:'italic'}}> обработка аутентификации или получение данных </span>, и применять ее ко множеству компонентов без дублирования кода.
        </li>
        <li>
          <b>Прокинуть дополнительные props:</b> добавление или модификация props компонентов <span style ={{fontStyle:'italic'}}> (удобно, например, для передачи данных из контекста или оборачивания компонентов в 
            дополнительные компоненты высшего порядка) </span>.
        </li>
        <li>
          <b>Обертывание компонентов:</b> используется для обертывания дополнительным 
          функциональным слоем <span style ={{fontStyle:'italic'}}> (для логирования, манипуляции 
          с состоянием и т.д) </span>.
        </li>
      </ol>
      <h3> Создание HOC</h3>
      <ol>
        <li>
          <b>Напиши функцию</b> ,которая принимает 
          компонент в качестве аргумента.
        </li>
        <li>
          Внутри функции <b>определи новый компонент</b>, который использует переданный 
          компонент и может <b>добавлять ему дополнительную функциональность</b> .
        </li>
        <li>
          <b>Верни этот новый компонент</b>.
        </li>
      </ol>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Component rendered:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};
`}
      </SyntaxHighlighter>
      <h4>Передача props из НОС</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const withExtraProps = (WrappedComponent) => {
  return (props) => {
    const extraProps = { additionalProp: "I'm extra!" };
    return <WrappedComponent {...props} {...extraProps} />;
  };
};
`}
      </SyntaxHighlighter>
      <h4>Примеры использования HOC</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//ЛОГИРОВАНИЕ

import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(\`Component \${WrappedComponent.name} mounted.\`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//АУТЕНТИФИКАЦИЯ

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = checkAuthStatus(); // Предположим, здесь происходит проверка аутентификации.
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <p>Please log in to access this content.</p>;
    }
  };
};

const AuthenticatedComponent = withAuth(ProfileComponent);
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//ЛОКАЛИЗАЦИЯ

const withLocalization = (WrappedComponent) => {
  return (props) => {
    const locale = getCurrentLocale(); // Получение текущей локали.
    const localizedContent = getLocalizedContent(locale);
    return <WrappedComponent {...props} localizedContent={localizedContent} />;
  };
};

const LocalizedProfile = withLocalization(ProfileComponent);
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//УПРАВЛЕНИЕ СОСТОЯНИЕМ

//используя CounterWithHOC в App,будет иметь состояние count и функцию incrementCount, 
//добавленные благодаря HOC
import React, { useState } from 'react';

// HOC,принимает компонент WrappedComponent и возвращает новый компонент, который добавляет 
//состояние count и функцию incrementCount
const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};

// Компонент Counter, который будет обернут HOC
//отображает текущее значение count
const Counter = ({ count, incrementCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

// Применение HOC к компоненту (Counter, обернутый в withCounter)
const CounterWithHOC = withCounter(Counter);

// Компонент, использующий обернутый компонент с HOC
const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterWithHOC />
    </div>
  );
};
`}
      </SyntaxHighlighter>
      
      
    </div>
                           
  );
};
export default HocPage;