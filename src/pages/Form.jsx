import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Form = () => {
  return (
    <div>
      <h2>Формы и их обработка (react-hook-form)</h2>
      <p>
        Существуют библиотеки, такие как{" "}
        <b style={{ color: "#A52A2A" }}>React Hook Form </b> , которая
        предоставляет более высокоуровневые решения для работы с формами. Они
        упрощают управление состоянием, валидацией, обработкой отправки и
        другими аспектами работы с формами.
      </p>
      <h3>React Hook Form</h3>
      <p>
        <b>React Hook Form</b> - библиотека, которая упрощает процесс работы с
        формами . Позволяет создавать интерактивные и дружественные формы с
        минимумом лишнего кода.
      </p>
      <h4>Установка</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`npm install react-hook-form`}
      </SyntaxHighlighter>
      <h4>Импорт библиотеки</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`import { useForm } from 'react-hook-form';`}
      </SyntaxHighlighter>
      <h4>Инициализация Хука</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`const { register, handleSubmit, formState: { errors } } = useForm()`}
      </SyntaxHighlighter>
      <h4>Создание Формы</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`<form onSubmit={handleSubmit(onSubmit)}>
  {/* Поля формы */}
</form>
`}
      </SyntaxHighlighter>
      <h4>Добавление Полей</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`//описываем поля формы используя register
<input {...register('name')} />
`}
      </SyntaxHighlighter>
      <h4>Валидация</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`//механизм валидации
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
      <h4>Обработка Отправки</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`// функция onSubmit, которая будет вызвана при отправке формы

const onSubmit = (data) => {
  console.log(data);
};
`}
      </SyntaxHighlighter>
      <h4>Кнопка Отправки</h4>
      <SyntaxHighlighter language="javascript" style={a11yLight}>
        {`<button type="submit">Отправить</button>
`}
      </SyntaxHighlighter>
      <h3>Кейсы валидации</h3>
      <p>
        <b style={{ color: "#A52A2A" }}>Register</b> - функция из библиотеки
        react-hook-form, которая используется
        <b>
          {" "}
          для связывания инпутов и других элементов формы с состоянием и
          валидацией формы
        </b>{" "}
        .
      </p>
      <p>
        Вызывается{" "}
        <b style={{ color: "#A52A2A" }}>
          register({"'"}fieldName{"'"}, validationRules)
        </b>{" "}
        , react-hook-form выполняет следующие действия:
        <ul>
          <li>
            регистрирует поле внутри формы, связывая его с{" "}
            <b>именем fieldName</b> ;
          </li>
          <li>
            применяет указанные <b>правила валидации (validationRules)</b> к
            этому полю .
          </li>
        </ul>
      </p>
      <h3>Использования register</h3>
      <ol>
        <li>
          <b>Базовое использование</b>
          <SyntaxHighlighter language="javascript" style={a11yLight}>
            {`<input {...register('name')} />`}
          </SyntaxHighlighter>
        </li>
        <li>
          <b>Добавление правил валидации</b>
          <SyntaxHighlighter language="javascript" style={a11yLight}>
            {`<input {...register('email', { required: 'Введите email' })} />`}
          </SyntaxHighlighter>
        </li>
        <li>
          <b>Использование нескольких правил</b>
          <SyntaxHighlighter language="javascript" style={a11yLight}>
            {`
<input
  {...register('age', {
    required: 'Укажите возраст',
    min: { value: 18, message: 'Вам должно быть 18 лет или больше' }
  })}
/>
`}
          </SyntaxHighlighter>
        </li>
        <li>
          <b>Поле с типом radio или checkbox</b>
          <SyntaxHighlighter language="javascript" style={a11yLight}>
            {`
<input type="radio" {...register('gender', { required: 'Выберите пол' })} value="male" />
<input type="radio" {...register('gender', { required: 'Выберите пол' })} value="female" />
`}
          </SyntaxHighlighter>
        </li>
        <li>
          <b>Поле с с паттерном валидации</b>
          <SyntaxHighlighter language="javascript" style={a11yLight}>
            {`
<input
  {...register('email', {
    required: 'Поле обязательно для заполнения',
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/,
      message: 'Введите корректный email',
    },
    
  })}
/>

`}
          </SyntaxHighlighter>
        </li>
      </ol>
      <h3>Controller</h3>
      <p>
        <b style={{ color: "#A52A2A" }}>Register</b> <b>не работает</b> с
        компонентами
        <b style={{ color: "#A52A2A" }}> Controller</b> . Использовать либо
        register, либо Controller.
      </p>
      <p>
        Использование <b>Controller</b> :
        <ol>
          <li>
            <b>Использование сторонних библиотек (ANTD или MUI) .</b>
          </li>
          <li>
            <b>Использование сторонних библиотек валидации (yup,joi) .</b>
          </li>
        </ol>
        <SyntaxHighlighter language="javascript" style={a11yLight}>
          {`
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Radio, Checkbox, DatePicker, Button } from 'antd'

const FormWithRHFController = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <Controller
          name='email'
          control={control}
          rules={{
            required: 'Поле обязательно для заполнения',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/,
              message: 'Введите корректный email'
            }
          }}
          render={({ field }) => <Input {...field} placeholder='Email' />}
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Текст:</label>
        <Controller
          name='text'
          control={control}
          rules={{ required: 'Поле обязательно для заполнения' }}
          render={({ field }) => <Input {...field} placeholder='Текст' />}
        />
        <p>{errors.text?.message}</p>
      </div>

      <div>
        <label>Число:</label>
        <Controller
          name='number'
          control={control}
          rules={{ required: 'Поле обязательно для заполнения' }}
          render={({ field }) => (
            <Input type='number' {...field} placeholder='Число' />
          )}
        />
        <p>{errors.number?.message}</p>
      </div>

      <div>
        <label>Пол:</label>
        <Controller
          name='gender'
          control={control}
          rules={{ required: 'Выберите пол' }}
          render={({ field }) => (
            <Radio.Group {...field}>
              <Radio value='male'>Мужской</Radio>
              <Radio value='female'>Женский</Radio>
            </Radio.Group>
          )}
        />
        <p>{errors.gender?.message}</p>
      </div>

      <div>
        <label>Чекбокс:</label>
        <Controller
          name='checkbox'
          control={control}
          rules={{ required: 'Подтвердите выбор' }}
          render={({ field }) => <Checkbox {...field}>Я согласен</Checkbox>}
        />
        <p>{errors.checkbox?.message}</p>
      </div>

      <div>
        <label>Дата:</label>
        <Controller
          name='date'
          control={control}
          rules={{ required: 'Выберите дату' }}
          render={({ field }) => <DatePicker {...field} />}
        />
        <p>{errors.date?.message}</p>
      </div>

      <Button type='primary' htmlType='submit'>
        Отправить
      </Button>
    </form>
  )
}
export default FormWithRHFController
`}
        </SyntaxHighlighter>
      </p>
    </div>
  );
};
