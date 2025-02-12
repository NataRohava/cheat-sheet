import React from 'react';



const VirtualDomPage = () => {
  return (
    <div>
      <h2>VirtualDOM</h2>
      <p>
      
        <b>DOM</b> - это сокращение от "Document Object Model" (объектная модель документа). 
        Когда ты открываешь веб-страницу в браузере, браузер создает структуру документа, 
        которую можно представить в виде дерева элементов. Эти элементы - это HTML-теги. 
        DOM позволяет нам манипулировать этой структурой, изменять содержимое, стили, добавлять и удалять 
        элементы.
      
      </p>
      <p>
        Каждый раз, когда происходит изменение данных в приложении, React должен обновить 
        DOM, чтобы отобразить эти изменения на странице. Но вместо того, чтобы непосредственно
        вносить изменения в реальный DOM, React использует виртуальный DOM.
      </p>
      <p>
        <b>Виртуальный DOM</b>-это промежуточное представление DOM в памяти компьютера.
        React создает виртуальное дерево элементов, которое точно соответствует текущему состоянию компонентов. 
        Затем React <b>сравнивает это виртуальное дерево с реальным DOM </b> 
        и определяет, какие изменения необходимо внести.
      </p>
      <p>
        Почему это так важно?
      </p>
      <ol>
        <li>
          <b>Эффективность:</b> Виртуальный DOM позволяет React оптимизировать обновление DOM. 
          Вместо того, чтобы изменять каждый элемент по отдельности, React находит 
          минимальный набор изменений, которые необходимо внести, и применяет их к 
          реальному DOM.Это снижает нагрузку на браузер и улучшает 
          производительность приложения.
        </li>
        <li>
          <b>Удобство программирования:</b> Работа с виртуальным DOM упрощает разработку. 
          Ты можешь думать о компонентах и их состояниях, не беспокоясь о том, 
          как React будет 
          обновлять реальный DOM. React самостоятельно заботится об эффективных изменениях.
        </li>
        <li>
          <b>Переносимость:</b> Ты можешь писать свое приложение, не думая о том, 
          какой браузер будет его запускать. React самостоятельно обрабатывает эти различия.
        </li>
      </ol>
      <p>
      Использование виртуального DOM позволяет React быть <b>эффективной, 
      удобной</b> в использовании библиотекой. 
      </p>
      <h3>Reconcilation</h3>
      <p>
      <b>Reconciliation</b> - это процесс, при котором React <b>сравнивает предыдущее состояние 
      компонента с новым 
      состоянием</b> и определяет, какие изменения нужно внести в пользовательский интерфейс.
      </p>
      <p>
        Reconciliation происходит по следующему сценарию:
      </p>
      <ol>
        <li>
        <b>Обновление состояния:</b> Когда состояние компонента изменяется, React запускает процесс reconciliation. Он сравнивает предыдущее состояние 
        компонента с новым состоянием, чтобы определить, какие части интерфейса 
        нужно обновить.
        </li>
        <li>
          <b>Сравнение элементов:</b>React сравнивает элементы, которые представляют компоненты, и их дочерние элементы. Он анализирует их типы, 
          свойства и ключи, чтобы понять, какие элементы нужно обновить, добавить или удалить.
        </li>
        <li>
          <b>Обновление виртуального DOM:</b>React использует виртуальный DOM (Virtual DOM), 
          который является внутренним представлением интерфейса. 
          Он создает новое виртуальное дерево элементов на основе изменений 
          состояния компонента.
        </li>
        <li>
          <b>Эффективные обновления:</b>React делает эффективные обновления, минимизируя 
          количество фактических изменений в реальном DOM. Он определяет, 
          какие элементы действительно нужно обновить, 
          и применяет только эти изменения в реальном DOM, чтобы избежать ненужных операций.
        </li>
      </ol>
      <p>
      Таким образом, при взаимодействии с компонентом Counter, React обновляет только те 
      части интерфейса, которые реально нуждаются в изменениях. 
      Это делает процесс обновления более эффективным и позволяет приложению работать 
      более быстро.
      </p>                     
    </div>
                           
  );
};
export default VirtualDomPage;