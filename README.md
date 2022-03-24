# test-app-react

Create app on React may be with Matherial UI/bootstrap

## Getting Started

To get a local copy of the current code, clone it using git:

```command
git clone git@github.com:burik84/test-app-react.git --branch for-roox-solutions

cd test-app-react/for-roox-solutions/
```

Next, Node.js. The current version Node ver.16.13.2 LTS. If you have an older version, please install Node.js via the [official package](https://nodejs.org).
You need to install the webpack package globally (see also [webpack](https://webpack.js.org/guides/getting-started/)):

```command
npm install -g webpack-cli
```

If everything worked out, install all dependencies for project:

```command
npm install
```

Finally, you need to start a local web server. Run:

```command
npm run serve
```

**Important!** when some changes are made, the page is not always refreshed, so if the page has not refreshed, you must manually refresh the page (for chrome - `F5`).
Local web server will be available at `http://localhost:xxxx/`

## Building

- mode develop `npm run build:dev`
- mode production `npm run build:prod`
- run server `npm run serve`

## About task

Необходимо сверстать предложенный макет, и написать простое SPA на React 16, используя следующие инструменты, технологии и подходы

- Компонентное использование CSS
- Большим плюсом реализовать SPA с использованием TypeScript, но не обязательно
- Препроцессор scss
- Переиспользование блоков
- Разделение кода на React-компоненты (презентационные и компоненты-контейнеры)
- Webpack

Необходимо сверстать две страницы “Список пользователей” и “Профиль пользователя”

Список пользователей:

- [x] Вывести 10 пользователей соответственно макету. Данные взять  с https://jsonplaceholder.typicode.com/users 
- [x] Пока идет загрузка списка пользователей должен быть индикатор загрузки( дизайн любой на усмотрение исполнителя ) 
- [x] Вывести на карточку: 
      - name
      - address.city
      - company.name
- [x] Кнопка “Подробнее” должна вести на “Профиль пользователя” 
- [x] Реализовать фильтрацию списка по признаку Name и City в алфавитном порядке

Профиль пользователя:

- [x] Вывести в профиле:
 - name
 - username
 - email
 - address.street
 - address.city
 - address.zipcode
 - phone
 - website
- [x] Все поля формы, кроме Comment, должны быть предзаполнены из https://jsonplaceholder.typicode.com/users
- [x] Реализовать кнопку изменить, изначально поля должны быть readonly, после нажатия на кнопку поля можно редактировать 
- [x] Реализовать валидацию на клиенте
- [x] Все поля формы, кроме поля Comment, обязательны для заполнения
- [x] Из данных формы при отправке нужно сформировать JSON и вывести его в консоль.
