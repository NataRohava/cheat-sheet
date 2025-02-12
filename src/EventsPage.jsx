import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const EventsPage = () => {
  return (
    <div>
      <h2>Events</h2>
      <p>
        <b>Events(события)</b> - позволяют <span style ={{backgroundColor:'#C0C0C0'}}>обрабатывать действия пользователя</span>, такие 
        как клики, наведение, отправка формы и другие.        
      </p>
      <h3>onClick (Клик)</h3>
      <p>
        Возникает при  <b style = {{color: '#A52A2A'}}>клике на элементе</b>.
      </p>            
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}
`}
      </SyntaxHighlighter> 
      <h3>onChange (Изменение)</h3>
      <p>
        Возникает при  <b style = {{color: '#A52A2A'}}>изменении значения элемента формы</b>,
        такого как текстовое поле (input), флажок (checkbox) или выбор элемента списка (radio).
      </p>            
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//event в callback-функции представляет объект события,генерируется 
//при изменении значения элемента формы или компонента. 
//event.target.value содержит текущее значение input элемента.

const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}

const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
    или
    <input type="text" onChange={event => handleChange(event)} />
  );
`}
      </SyntaxHighlighter>
      <h3>onSubmit (Отправка формы)</h3>
      <p>
        Возникает при  <b style = {{color: '#A52A2A'}}>отправке формы</b>.  
      </p>            
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const handleSubmit = (event) => {
//event.preventDefault() исп-ся для отмены  действия по умолчанию, 
//которое должно было произойти в ответ на событие

  event.preventDefault();
  console.log('Форма отправлена!');
}

const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );
`}
      </SyntaxHighlighter>
      <h3>onMouseOver (Наведение курсора)</h3>
      <p>
        Возникает, когда <b style = {{color: '#A52A2A'}}>курсор наводится на элемент</b>,  
        для отображения дополнительной информации или изменения состояния 
        компонента при наведении.  
      </p>       
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const handleMouseOver = () => {
  console.log('Курсор наведен!');
}

const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  );
}
`}
      </SyntaxHighlighter> 
      <h3>onKeyDown (Нажатие клавиши)</h3>
      <p>
        Возникает при <b style = {{color: '#A52A2A'}}>нажатии клавиши на клавиатуре</b>,  
        для реагирования на определенные комбинации клавиш или 
        выполнения действия на основе нажатых клавиш. 
      </p>       
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}
`}
      </SyntaxHighlighter>
      <h3>onfocus (фокус)</h3>
      <p>
        вызывается, когда <b style = {{color: '#A52A2A'}}>пользователь устанавливает фокус</b>,  
        на данный элемент.
      </p> 
      <h3>onblur</h3>
      <p>
        Возникает, когда <b style = {{color: '#A52A2A'}}>элемент теряет фокус</b>. 
      </p> 
      <h3>onKeyPress</h3>
        <p>
          Возникает, когда <b style = {{color: '#A52A2A'}}>когда нажимается символьная клавиша, то есть клавиша которая создаёт символ</b> 
         (буквы, цифры, знаки пунктуации). 
        </p> 
        <h3>onKeyUp</h3>
        <p>
          Возникает, когда <b style = {{color: '#A52A2A'}}>когда клавиша была отпущена</b> . 
        </p> 
        <p>
          События keydown и keyup показывают то, что клавиша была нажата, в то 
          время как keypress показывает то, какой символ был введён.
        </p>           
      


      
      
    </div>
                           
  );
};
export default EventsPage;