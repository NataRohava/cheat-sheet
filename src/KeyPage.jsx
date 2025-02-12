import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const KeyPage = () => {
  return (
    <div>
      <h2>Key (ключ)</h2>
      <p>
          <b>Ключи</b> помогают React <span style ={{backgroundColor:'#C0C0C0'}}>определять, какие элементы были 
          изменены, добавлены или удалены</span> .Их необходимо указывать, чтобы React мог сопоставлять элементы
          массива с течением времени.<br/>
          Ключи используются для определения уникальности каждого элемента массива и обеспечения
          эффективного процесса обновления компонентов при необходимости.          
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>
        {number}
    </li>
);
`}
      </SyntaxHighlighter>
      <p>
        Лучший способ выбрать ключ — это использовать строку, которая будет явно 
        отличать элемент списка от его соседей. Чаще всего будем <b style = {{color: '#A52A2A'}}>использовать
        ID из данных как ключи </b> .
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);
`}
      </SyntaxHighlighter>
      <p>
        Ключи <b>нужно определять непосредственно 
        внутри массивов </b> . 
        Если не указать ключи, в консоли увидим сообщение:<br/>
        <b style = {{color: '#A52A2A'}}> Warning: Each child in an array or 
        iterator should have a unique “key” prop </b> .
      </p>
      <p>
        Ключи <b>оптимизируют работу с элементами массивов</b>, уменьшают количество 
        ненужных удалений и созданий элементов.Без key механизм reconciliation сверяет 
        компоненты попарно между текущим и новым VDOM. Из-за этого может происходить
        большое количество лишних перерисовок интерфейса, что замедляет работу 
        приложения.
      </p> 
      <p>
        Добавляя key, мы помогаем механизму reconciliation тем, что с key он сверяет 
        не попарно, а ищет компоненты с тем же key (тег / имя компонента при этом 
        учитывается) — это уменьшает количество перерисовок интерфейса.<br/> 
        <b>Обновлены/добавлены будут только те элементы, которые были изменены/не 
        встречались в предыдущем дереве</b> . 
      </p>    
    </div>
                           
  );
};
export default KeyPage;