import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Storage = () => {
  return (
    <div>
      <h2>STORAGEs</h2>
      <p>
        <b style={{ color: "#A52A2A" }}>Local Storage</b> - механизм, который
        позволяет веб-приложениям сохранять данные локально в браузере.{" "}
        <b>
          Данные будут сохранены после закрытия браузера и перезагрузки страницы{" "}
        </b>
        . Может быть полезен{" "}
        <b>
          для хранения пользовательских настроек (например темная тема на
          сайте), предпочтений пользователя и других данных{" "}
        </b>
        , которые могут быть использованы для персонализации пользовательского
        опыта. Данные сохраняются локально на компьютере пользователя и не
        передаются на сервер.
      </p>
      <p>
        Данные в LocalStorage хранятся в виде <b>строк</b> . Они могут быть
        преобразованы в другие типы данных с помощью методов JavaScript,
        например parseInt() или JSON.parse().
      </p>
      <h3> localStorage объекта window</h3>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`//записываем строку "Hello, Redev!" в LocalStorage с ключом "myData"

localStorage.setItem('myData', 'Hello, Redev!');
`}
      </SyntaxHighlighter>
      <h4>Получение данных из LocalStorage</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`//метод getItem() объекта localStorage
//получаем значение из LocalStorage с ключом "myData" и записываем его в myData

const myData = localStorage.getItem('myData');
console.log(myData); // Выводится "Hello, Redev!"
`}
      </SyntaxHighlighter>
      <h3>Cookies</h3>
      <p>
        <b style={{ color: "#A52A2A" }}>Cookies </b> - небольшие текстовые
        файлы, которые веб-сайты отправляют и хранят на компьютере пользователя
        через его веб-браузер. Удобный механизм{" "}
        <b>для хранения небольших данных</b> , связанных с пользователем и
        веб-сайтом.
      </p>
      <h4>Хранилище в виде Cookies</h4>
      <ol>
        <li>
          <b>Сохранение состояния: </b> Cookies позволяют хранить небольшие
          объемы данных, такие как пользовательские настройки, предпочтения,
          идентификаторы сессий и другие данные, которые нужно сохранить между
          различными запросами или сеансами пользователей.
        </li>
        <li>
          <b>Аутентификация и авторизация: </b> Cookies могут использоваться для
          хранения токенов аутентификации, позволяя пользователю оставаться
          аутентифицированным в приложении даже после перезапуска браузера.
        </li>
        <li>
          <b>Персонализация и отслеживание: </b> могут использоваться для
          анализа поведения пользователя на сайте и предоставления
          персонализированного опыта. Например, рекомендации товаров, основанные
          на предыдущих покупках.
        </li>
      </ol>
      <h4>Отличие от LocalStorage</h4>
      <ol>
        <li>
          <b>Емкость данных: </b> Cookies могут содержать до 4KB данных, в то
          время как Local Storage позволяет хранить около 5MB данных.
        </li>
        <li>
          <b>Срок хранения: </b> Cookies имеют срок хранения, который можно
          указать, в то время как данные в Local Storage хранятся неограниченное
          время, пока их явно не удалить.
        </li>
        <li>
          <b>Передача данных: </b> Cookies <b>автоматически включаются</b> в
          заголовки каждого HTTP-запроса к определенному домену, что делает их
          более подходящими для некоторых сценариев, таких как авторизация.
          Local Storage данные не автоматически передаются с каждым запросом.
        </li>
      </ol>
      <h4>Работа с Cookies</h4>
      <p>
        Можно работать с cookies, используя{" "}
        <b style={{ color: "#A52A2A" }}>JavaScript API</b>
        или же библиотеку{" "}
        <a href="https://www.npmjs.com/package/cookie">
          https://www.npmjs.com/package/cookie{" "}
        </a>
        .
      </p>

      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`// Установка cookie на определенное количество дней

document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
`}
      </SyntaxHighlighter>
      <h4>Получение Cookie</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`// Получение всех cookie в виде строки
const allCookies = document.cookie;

// Разбивка строки на отдельные cookie
const cookiesArray = allCookies.split("; ");
const cookies = {};
cookiesArray.forEach(cookie => {
  const [name, value] = cookie.split("=");
  cookies[name] = value;
});
`}
      </SyntaxHighlighter>
      <h4>Удаление Cookie</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`// Удаление cookie путем установки срока действия в прошлое

document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
`}
      </SyntaxHighlighter>
      <h4>Валидация</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`
<input
  type='number'
  {...register('age', {
    required: 'Обязательное поле',
    min: {
     value: 18,
     message: 'Вам должно быть 18 лет или больше'
    }
   })}
 />
<p>{errors.age?.message}</p>
`}
      </SyntaxHighlighter>
      <h3>Session Storage</h3>
      <p>
        <b style={{ color: "#A52A2A" }}>Session Storage </b> - еще один механизм
        хранения данных в браузере.{" "}
        <b>Session Storage сохраняет данные только на время сеанса браузера </b>
        . Данные будут удалены после закрытия браузера или вкладки. Может быть
        полезно для хранения временных данных, таких как формы, которые не нужно
        сохранять после закрытия браузера (для хранения небольших объемов
        данных). B Session Storage также хранятся в виде строк.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`sessionStorage.setItem('myData', 'Hello, Redev!');
`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`//получение данных из Session Storage
//значение из Session Storage с ключом "myData" и записываем в myData

const myData = sessionStorage.getItem('myData');
console.log(myData); // Выводится "Hello, Redev!"
`}
      </SyntaxHighlighter>
      <h3>localForage</h3>
      <p>
        <b style={{ color: "#A52A2A" }}>localForage </b> - это
        JavaScript-библиотека, предоставляющая удобный асинхронный интерфейс для
        работы с локальными хранилищами в браузерах.
        <b> Позволяет сохранять данные в браузере пользователя</b>,{" "}
        <span style={{ fontStyle: "italic" }}>
          используя различные хранилища, такие как IndexedDB, WebSQL и
          localStorage
        </span>{" "}
        , в зависимости от поддержки браузера. Помогает асинхронно сохранять и
        извлекать данные из различных хранилищ, обеспечивая более эффективное
        управление данными на стороне клиента.
      </p>
      <h4>Установка localForage</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`npm install localforage`}
      </SyntaxHighlighter>
      <h4>Использование localForage в React</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import localforage from 'localforage';`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`
import React, { useState, useEffect } from 'react';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    // Извлекаем сохраненный язык при загрузке компонента
    localforage.getItem('language').then(language => {
      if (language) {
        setSelectedLanguage(language);
      }
    });
  }, []);

  const handleLanguageChange = (language) => {
    // Сохраняем выбранный язык в локальном хранилище
    localforage.setItem('language', language).then(() => {
      setSelectedLanguage(language);
    });
  };

  return (
    <>
      <h1>Настройки</h1>
      <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="en">Английский</option>
        <option value="fr">Французский</option>
        <option value="es">Испанский</option>
      </select>
    </>
  );
};
export default App;
`}
      </SyntaxHighlighter>
    </div>
  );
};
