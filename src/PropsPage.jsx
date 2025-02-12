import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const PropsPage = () => {
  return (
    <div>
      <h2>Props</h2>
      <p>
        <b>Пропсы (properties)</b> - это данные, которые передаются в компоненты 
        React для настройки их поведения и внешнего вида. Они позволяют передавать 
        информацию из родительского компонента в дочерний компонент 
        (<span style ={{backgroundColor:'#C0C0C0'}}>компонент-это функция,пропс-параметр
        ,который мы куда-то передаем</span>).Дочерний компонент может читать эти 
        props и использовать их.
      </p>
      <ul>
        <li>Пропс-<b style = {{color: '#A52A2A'}}>это объект</b>,передаётся в компоненты как параметр.</li>
        <li>Можно использовать <b style = {{color: '#A52A2A'}}>для передачи любых данных</b> , включая строки, 
            числа, массивы, объекты и функции. 
        </li>
        <li>Пропсы <b style = {{color: '#A52A2A'}}>неизменяемы</b> (immutable), их нельзя изменять напрямую.</li>
      </ul>
      <p>
        <h3>Передача пропсов компонентам</h3>
        <b style = {{color: '#A52A2A'}}> 
          {`<имя компонента атрибут={значение,к-е хотим передать}/>`}
        </b>
        <p>
          Пропсы <span style ={{backgroundColor:'#C0C0C0'}}>передаются в компоненты в виде атрибутов</span> 
          при их использовании в JSX. Например, <b style = {{color: '#A52A2A'}}> 
          {`<ChildComponent message="Привет, Redev!"/>`}</b> передает пропс message со 
          значением "Привет, Redev!" в компонент ChildComponent.
        </p>  
      </p>
      <p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}
`}
      </SyntaxHighlighter> 
      </p>
      <h3>Доступ к пропсам</h3>
      <p>
        <b>Функциональная компонента</b>
      </p>
      <p>
        <b style = {{color: '#A52A2A'}}>{`(props) => {...}`}</b>
      </p>
      

      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}
// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}
// лучше делать деструктуризацию, props это обычный объект
const ChildComponent = ({message}) => {
  return <div>{message}</div>;
}
`}
      </SyntaxHighlighter> 
      <p>
        <b>Классовая компонента</b>
      </p>
      <p>
        <b style = {{color: '#A52A2A'}}>{`this.props =>например,this.props.message`}</b>
      </p>      
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//ParentComponent.js
import ChildComponent from './ChildComponent';

const ParentComponent2 = () => <div>parentComponent2</div>
const obj = {name:'Pasha'}

const ParentComponent = () => {
  return (
    <div>
        <ChildComponent 
		name={'abc'} 
		age={25} 
		isMan={true} 
		parentComponent2={ParentComponent2} 
		object={obj}
	/>
    </div>
  );
}

export default ParentComponent;

//ChildComponent.js
import React from 'react'

class ChildComponent extends React.Component{
  render(){
    return (
      <div>
        {this.props.name}
        {this.props.age}
        {this.props.isMan? "Man" : "Women"}
        {this.props.parentComponent2()}
        {this.props.object.name}
      </div>
    );
  }
}

export default ChildComponent
`}
      </SyntaxHighlighter>       
    </div>
                           
  );
};
export default PropsPage;