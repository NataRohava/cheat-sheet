import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const FragmentPage = () => {
  return (
    <div>
      <h2>Fragment (фрагмент)</h2>
      <p>
          С помощью фрагментов можно <span style ={{backgroundColor:'#C0C0C0'}}>сгруппировать список дочерних элементов без 
          добавления дополнительных узлов в DOM </span> .
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import React, { Fragment } from 'react';

//Заменяем теги div на Fragment:
const ChildComponent = () => <Fragment>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</Fragment>
`}
      </SyntaxHighlighter>
      <p>
      Существует <b>сокращенная запись</b> (импортировать не нужно). Недостаток 
      сокращенной записи: <b style = {{color: '#A52A2A'}}>нельзя использовать атрибуты</b> , 
      например className или  key:
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import React, { Fragment } from 'react';

//так хорошо
const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>

// так нельзя. Будет ошибка
const ChildComponent = () => < className="child" >
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>
`}
      </SyntaxHighlighter>      
    </div>
                           
  );
};
export default FragmentPage;