import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';



const LifeCyclePage = () => {
  return (
    <div>
      <h2>LifeCycle (useEffect)</h2>
      <p>
        <b>Жизненный цикл (lifeCycle) компонента</b> - это шаги (этапы), которые проходят компоненты:
        <span style ={{backgroundColor:'#C0C0C0'}}>создаются,обновляются,удаляются</span> , чтобы
        правильно работать на странице.  
      </p>
      <h3>Методы жизненного цикла</h3>
      <ol>
        <li>Методы монтирования (Mounting Methods):
          <ul>
            <li><b style = {{color: '#A52A2A'}}>constructor()</b></li>
            <li><b style = {{color: '#A52A2A'}}>render()</b></li>
            <li><b style = {{color: '#A52A2A'}}>componentDidMount()</b></li>
          </ul>
        </li>
        <li>Методы обновления (Updating Methods):
          <ul>
            <li><b style = {{color: '#A52A2A'}}>shouldComponentUpdate()</b></li>
            <li><b style = {{color: '#A52A2A'}}>render()</b></li>
            <li><b style = {{color: '#A52A2A'}}>componentDidUpdate()</b></li>
          </ul>
        </li>
        <li>Методы размонтирования (Unmounting Methods):
          <ul>
            <li><b style = {{color: '#A52A2A'}}>componentWillUnmount()</b></li>
          </ul>
        </li>
        <li>Методы обработки ошибок (Error Handling Methods):
          <ul>
            <li><b style = {{color: '#A52A2A'}}>componentDidCatch()</b></li>
          </ul>
        </li>      
      </ol>
      <p>
        <h3>Жизненный цикл функциональных компонентов</h3>
        <p>
          Для использования методов жизненного цикла в функциональных компонентах 
        предназначек хук <b style = {{color: '#A52A2A'}}>useEffect</b> .
        </p>
        <p>
          Первый параметр: <span style ={{backgroundColor:'#C0C0C0'}}>функция</span> , 
          которая должна выполниться при монтировании компонента и при каждом обновлении.<br/>
          Второй параметр: <span style ={{backgroundColor:'#C0C0C0'}}>массив зависимостей</span> , 
          который определяет, на что конкретно должен реагировать useEffect.
        </p>  
      </p>
      <h4>Mounting(монтирование): массив пуст</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>{`useEffect (() => {}, [])`}</b><br/>
        Заменяет <span style ={{backgroundColor:'#C0C0C0'}}>componentDidMount()</span>. Выполняет побочные 
        эффекты только один раз после монтирования <span style ={{fontStyle:'italic'}}>(запуститься один раз при первом рендере)</span> . 
      </p>      
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`// Отработает как componentDidMount
useEffect(() => { console.log("componentDidMount") }, []) 
`}
      </SyntaxHighlighter> 
      <h4>Updating (Обновление):</h4>
      <p>
        <b style = {{font: 'bold'}}>В массиве указаны значения.</b><br/>
        <b style = {{color: '#A52A2A'}}>{`useEffect (() => {}, [dependency])`}</b><br/>
        Заменяет <span style ={{backgroundColor:'#C0C0C0'}}>componentDidUpdate()</span>. Позволяет 
        указать зависимость для выполнения функции при изменении определенных props или state <span style ={{fontStyle:'italic'}}>
          (запуститься при изменении dependency)</span>.  
        Что передашь, за тем и будет следить и при изменении вызовет функцию.
      </p>      
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`// Отработает как componentDidUpdate (но есть прикол)
useEffect(() => { console.log("componentDidUpdate") }, [dependency])
`}
      </SyntaxHighlighter> 
      <p>
        <b style = {{font: 'bold'}}>Нет массива.</b><br/>
        <b style = {{color: '#A52A2A'}}>{`useEffect (() => {})`}</b><br/>
        Отрабатывает как <span style ={{backgroundColor:'#C0C0C0'}}>componentDidMount() и componentDidUpdate()</span>  
        <span style ={{fontStyle:'italic'}}>(запускается после каждого рендеринга компонента)</span> .  
        
      </p>      
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`// Отработает как componentDidMount и componentDidUpdate
useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 
`}
      </SyntaxHighlighter> 
      <h4>Unmounting (Размонтирование)</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>{`useEffect ( () => {`}<br/>
                {`return () => {};`}<br/>
            { `}) `}</b><br/>
        Заменяет <span style ={{backgroundColor:'#C0C0C0'}}>componentWillUnmount()</span>. 
        Выполняет очистку и отписку от побочных эффектов при размонтировании (удалении из DOM) компонента.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{` // Отработает как componentWillUnmount
useEffect(() => {
  return () => console.log('componentWillUnmount') 
}, [])
`}
      </SyntaxHighlighter> 
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{` import React, { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Компонент был монтирован');
    return () => {
      console.log('Компонент будет размонтирован');
    };
  }, []); // Пустой массив зависимостей и возвращает функцию, 
					// а значит выполнится только при монтировании и размонтировании

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
    </div>
  );
}

export default Example;
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{` import React, { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(\`Счетчик изменен на: \${count}\`);
  }, [count]); // Зависимость [count] - выполнится при изменении состояния count
  //count изменяется, useEffect обновляет состояние message, 
  //отображая новое сообщение о счетчике

  return (
    <div>
      <p>{message}</p>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
    </div>
  );
};

export default Example;
`}
      </SyntaxHighlighter>
      <h3>Жизненный цикл классовой компоненты</h3> 
      <h4>Mounting(монтирование)</h4> 
      <ul>
            <li>
              <b style = {{color: '#A52A2A'}}>constructor()</b>: вызывается при создании экземпляра 
              компонента для инициализации состояния и привязки методов.
            </li>
            <li>
              <b style = {{color: '#A52A2A'}}>render()</b>: отрисовывает компонент и возвращает React элементы.
            </li>
            <li>
              <b style = {{color: '#A52A2A'}}>componentDidMount()</b>: вызывается после рендеринга компонента
              для выполнения запросов к серверу, подписки и др.
            </li>
      </ul>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{` class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
    this.increment = this.increment.bind(this)
  }

  increment () {
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount () {
    // Здесь можно выполнять запросы к серверу.
    console.log('Компонент был смонтирован!')
  }

  render () {
    return (
      <div>
        <p>Количество: {this.state.count}</p>
        <button onClick={this.increment}>+++</button>
      </div>
    )
  }
}
`}
      </SyntaxHighlighter>
      <h4>Updating (обновление)</h4> 
      <ul>
            <li>
              <b style = {{color: '#A52A2A'}}>shouldComponentUpdate(nextProps, nextState)</b>: вызывается перед обновлением 
              компонента для оптимизации перерисовки компонента путем возврата false, если обновление не требуется.
            </li>
            <li>
              <b style = {{color: '#A52A2A'}}>render()</b>: отрисовывает компонент и возвращает React элементы.
            </li>
            <li>
              <b style = {{color: '#A52A2A'}}>componentDidUpdate(prevProps, prevState)</b>: вызывается после обновления компонента и 
              его рендеринга для выполнения дополнительных действий после обновления компонента (для выполнения 
              запросов к серверу на основе новых пропсов).
            </li>
      </ul>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{` class MyComponent extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    // В этом примере компонент будет обновляться только при изменении свойства name.
    return nextProps.name !== this.props.name
  }

  componentDidUpdate (prevProps, prevState) {
    // Здесь можно выполнять действия после обновления компонента.
    console.log('Компонент был обновлен!')
  }

  render () {
    return <div>Hello, {this.props.name}!</div>
  }
}
`}
      </SyntaxHighlighter>
      <h4>Unmounting (размонтирование)</h4> 
      <ul>
            <li>
              <b style = {{color: '#A52A2A'}}>componentWillUnmount()</b>: Вызывается перед удалением 
              компонента из DOM для выполнения необходимых очисток.  
            </li>
      </ul>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{` class WillUnmountExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
    }
  }

  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
    alert('Компонент удален из DOM')
  }

  render () {
    return (
      <div>
        <p>Время: {this.state.time} секунд</p>
      </div>
    )
  }
}

export default WillUnmountExample
`}
      </SyntaxHighlighter>
      <h4>Error Handling (обработка ошибок)</h4> 
      <ul>
            <li>
              <b style = {{color: '#A52A2A'}}>componentDidCatch(error, info)</b>: вызывается при 
              возникновении ошибки в дочерних компонентах для отлавливания и обработки ошибок.
                
            </li>
      </ul>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{` import React, { Component } from 'react';

class ErrorBoundaryExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Что-то пошло не так.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Дополнительная информация: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Пример использования ErrorBoundary</h1>
        <ErrorBoundaryExample>
          {/* Твой компонент с возможной ошибкой */}
          <ComponentWithError />
        </ErrorBoundaryExample>
      </div>
    );
  }
}

const ComponentWithError = () => {
  const [throwError, setThrowError] = useState(false)

  const handleClick = () => setThrowError(presState => !presState.throwError)

  if (throwError) {
    // Имитация ошибки
    throw new Error('Это ошибка в компоненте ComponentWithError')
  }

  return (
    <div>
      <h3>Компонент с возможной ошибкой</h3>
      <button onClick={() => handleClick()}>Генерировать ошибку</button>
    </div>
  )
}

export default App;
`}
      </SyntaxHighlighter>
      <h3>
        <Link to = "/didupdate">Пример useEffect как замена componentDidUpdate</Link>
      </h3>       


      
      
    </div>
                           
  );
};
export default LifeCyclePage;