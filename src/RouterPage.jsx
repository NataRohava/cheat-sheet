import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';




const RouterPage = () => {
  return (
    <div>
      <h2>Роутинг с помощью React Router</h2>
      <p>
        <b>Роутинг</b> обеспечивает <span style ={{backgroundColor:'#C0C0C0'}}>навигацию и переходы между различными 
        страницами и разделами приложения</span> . 
      </p>
      <p>
        <b>Цель роутинга</b> - <b style = {{color: '#A52A2A'}}>позволить пользователям перемещаться по различным 
        частям приложения БЕЗ ПЕРЕЗАГРУЗКИ.</b>         
      </p>
      <h3>React Router Dom</h3>
      <p>
        <b>React Router Dom</b> -биюлиотека,которая упрощает создание маршрутов в React.
      </p>
      <h4>Установка</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`npm install react-router-dom`}
      </SyntaxHighlighter>
      <h4>Использование BrowserRouter</h4>
      <p>
        После установки React Router Dom можно использовать его в проекте. 
        <b>BrowserRouter</b> -оборачивает приложение и предоставляет контекст для 
        маршрутизации. Используется для управления маршрутизацией в приложении.
        Необходимо импортировать компоненты и обернуть приложение в <b style = {{color: '#A52A2A'}}>BrowserRouter</b> :
        <ol>
          <li>
            В файле, где будем использовать React Router Dom, добавляем импорт:
            <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { BrowserRouter } from 'react-router-dom';`}
      </SyntaxHighlighter>
          </li>
          <li>
            Корневой файл оборачиваем в компонент BrowserRouter <span style ={{fontStyle:'italic'}}>
            (например, main.jsx)</span> . 
            <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>,
  </BrowserRouter>
)
`}
      </SyntaxHighlighter>
          </li>
        </ol> 
      </p>
      <h4>Routes</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>Routes</b> - компонент-контейнер, в котором <b>определяют 
        все маршруты в приложении</b>. Используем Routes 
        для <b>группировки нескольких Route компонентов</b> . 
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { Routes, Route } from 'react-router-dom';

// ...

//используем Routes для определения трех маршрутов
//При совпадении пути в URL с определенными путями маршрутов 
//будет отображен соответствующий компонент

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
`}
      </SyntaxHighlighter>
      <h4>Route</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>Route</b> - компонент, который <b>определяет отдельный 
        маршрут внутри Routes </b> . Каждый Route имеет свой <b>путь (path)</b> и <b>элемент (element)</b>, 
        который будет отображаться, когда маршрут совпадает.         
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { Routes, Route } from 'react-router-dom';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
`}
      </SyntaxHighlighter>
      <p>
        Можно использовать дополнительные атрибуты, такие как <b>exact</b> для точного 
        совпадения пути и <b>(*) fallback</b> для отображения компонента-заглушки, если 
        не найден ни один из маршрутов.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { Routes, Route } from 'react-router-dom';

// ...

//будет отображать компонент <NotFound />, если не найден ни один 
//из определенных маршрутов.

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
`}
      </SyntaxHighlighter>
      <h4>Link</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>Link</b> используется для <b>создания ссылок для 
        навигации между маршрутами  </b>.        
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { Link } from 'react-router-dom';

// ..

//пользователь кликает на ссылку,будет перенаправлен к соответ.маршруту

<Link to="/">Главная</Link>
<Link to="/about">О нас</Link>
<Link to="/contact">Контакты</Link>
`}
      </SyntaxHighlighter>
      <h4>NavLink</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>NavLink</b> позволяет <b>создавать активные ссылки, 
        добавляя класс "active"</b> к текущему активному маршруту. Можем использовать этот 
        класс <b>для стилизации и выделения</b> текущего активного маршрута.        
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { NavLink } from 'react-router-dom';

// ...

<NavLink to="/" activeClassName="active">Главная</NavLink>
<NavLink to="/about" activeClassName="active">О нас</NavLink>
<NavLink to="/contact" activeClassName="active">Контакты</NavLink>
`}
      </SyntaxHighlighter>
      <h4>useNavigate</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>useNavigate</b> это хук, который <b>позволяет перенаправлять 
        пользователя на другие маршруты </b> .         
      </p>
      <p>
        Используем <b>useNavigate</b>, чтобы получить функцию <b>navigate</b>. При клике на кнопку, 
        вызываем navigate и передаем ей путь <b>'/about'</b> , чтобы перенаправить 
        пользователя на страницу "О нас".
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { useNavigate } from 'react-router-dom';

// ...

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Домашняя страница</h1>
      <button onClick={handleClick}>Перейти к странице О нас</button>
    </div>
  );
}
`}
      </SyntaxHighlighter>
      <h4>useParams</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>useParams</b> это хук, который <b>позволяет 
        получать параметры из маршрута </b> .         
      </p>
      <p>
        Когда используем <b>useParams</b> , можем получить <b>объект params</b> , 
        который содержит значения параметров из текущего маршрута.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { useParams } from 'react-router-dom';

// ...

const UserProfile = () => {
  const params = useParams();

//предполагаем, что в маршруте у нас есть параметр :username
//выводим его значение на странице профиля пользователя

  return (
    <div>
      <h1>Профиль пользователя: {params.username}</h1>
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <h4>useLocation</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>useLocation</b> это хук, который <b>позволяет получать 
        информацию о текущем URL и его параметрах  </b> .         
      </p>
      <p>
        Когда используем <b>useLocation</b> , можем получить <b>объект location</b> , 
        который содержит информацию о текущем URL.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { useLocation } from 'react-router-dom';

// ...

const Page = () => {
  const location = useLocation();

  //используем useLocation, чтобы получить объект location
  //выводим путь (pathname) текущего URL на странице

  return (
    <div>
      <h1>Текущий URL: {location.pathname}</h1>
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <h4>Outlet</h4>
      <p>
        <b style = {{color: '#A52A2A'}}>Outlet</b> играет ключевую роль в <b>отображении компонентов, 
        соответствующих текущему маршруту.Позволяет динамически отображать компоненты на 
        основе текущего маршрута  </b> .         
      </p>
      <p>
        Когда используем <b>Outlet</b> он служит контейнером <b>для отображения компонентов, 
        которые соответствуют маршрутам</b> в приложении. <span style ={{fontStyle: 'italic'}} >Outlet должен быть расположен внутри компонента, 
        который уже является частью маршрутизации </span>.
      </p>
      <p>
        Используем Outlet внутри компонента App. Когда пользователь переходит по разным маршрутам, Outlet автоматически 
        рендерит компоненты, связанные с этими маршрутами. Например, если текущий маршрут - "/about", то компонент, 
        соответствующий этому маршруту, будет отображен внутри Outlet.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { Outlet } from 'react-router-dom';

// ...

const App = () => {
  return (
    <div>
      <h1>Мое приложение</h1>
      <nav>
        {/* Навигационные ссылки */}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <h4>Параметры маршрутов: передача динамических данных через URL</h4>
      <p>
        В веб-приложениях нам требуется передавать динамические данные через URL:
        подробности конкретного элемента списка, где каждый элемент имеет уникальный 
        идентификатор. Можем использовать <b style = {{color: '#A52A2A'}}>параметры маршрутов</b> для 
        передачи таких данных. Чтобы <b>определить параметр маршрута</b> , мы используем <b>двоеточие (:)</b> перед 
        именем параметра в пути маршрута.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//значение id динамически меняется в зависимости от выбранного пользователя

<Route path="/users/:id" element={<UserDetailPage />} />
`}
      </SyntaxHighlighter>
      <h4>Использование параметров маршрутов</h4>
      <p>
        Для доступа к значению параметра маршрута можно 
        использовать <b style = {{color: '#A52A2A'}}>хук useParams()</b> .     
        Получаем объект с значениями всех параметров маршрута.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { useParams } from 'react-router-dom';

//useParams() для получения значения параметра id
//можно использовать значение внутри компонента UserDetailPage
//для отображения деталей пользователя с указанным идентификатором

const UserDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Детали пользователя с ID {id}</h2>
      {/* Дополнительный контент */}
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <h4>Вложенные маршруты</h4>
      <p>
        <b>Вложенные Route</b> должны быть вложены в соответствующий родительский маршрут.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Мое приложение</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />}>
          <Route path="/" element={<AllProducts />} />
          <Route path="/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <p>
      Для использования вложенных маршрутов внутри компонента <b>ProductsPage</b>
      используем компонент <b>Outlet</b> . Outlet определяет место, где будут 
      отображаться вложенные маршруты (т.е. компоненты AllProducts и 
      ProductDetail).
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`const ProductsPage = () => {
  return (
    <div>
      <h2>Страница продуктов</h2>
      <ul>
        <li>
          <Link to="/">Все продукты</Link>
        </li>
        <li>
          <Link to="/products/1">Продукт 1</Link>
        </li>
        <li>
          <Link to="/products/2">Продукт 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
`}
      </SyntaxHighlighter>
      <h4>PrivateRoute: Защита маршрутов</h4>
      <p>
       Для ограничения доступа к определенным маршрутам и для доступа к этим маршрутам
       только для аутентифицированных пользователей можно использовать 
       <b>PrivateRoute</b> (проверяет статус аутентификации пользователя и редиректить 
       его в случае необходимости).
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//создание компонента PrivateRoute
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ ...props }) => {
  const isAuth = // Логика проверки аутентификации пользователя
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
{`//использование PrivateRoute для защиты маршрутов, доступных только для 
//аутентифицированных пользователей
import { Route, Navigate } from 'react-router-dom';

//когда пользователь не аутентифицирован, будет перенаправлен на страницу входа "/login"

const PrivateRoute = ({ ...props }) => {
  const isAuth = // Логика проверки аутентификации пользователя
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
`}
      </SyntaxHighlighter>

      
    </div>
                           
  );
};
export default RouterPage;