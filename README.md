
[![Build status](https://ci.appveyor.com/api/projects/status/0f9dcbl84x2mnvwc?svg=true)](https://ci.appveyor.com/project/Mariza0/react-hw6-lifecycle-crud-frontend)

[ссылка на тестовый проект](https://mariza0.github.io/react-hw6-lifecycle-crud-frontend/) 

[сслыка на задание](https://github.com/netology-code/ra16-homeworks/tree/ra-51/lifecycle-http/crud)


## CRUD
Вам необходимо реализовать базовый CRUD без обновления при работе с HTTP.

Backend вы можете либо написать сами, либо взять готовый из каталога backend.

![](/src//img/crud.png)
### Общая механика
Первоначальная загрузка: делается http-запрос GET на адрес http://localhost:7070/notes, полученные данные отображаются в виде карточек с возможностью удаления.

### Добавление:

Вы заполняете форму и нажимаете кнопку «Добавить».
Выполняется http-запрос POST на адрес http://localhost:7070/notes, в теле запроса передаётся следующий JSON:
```
{
    "id": 0,
    "content": "То, что было введено в поле ввода"
}
```
После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7070/notes.
Удаление:

Вы нажимаете на крестик на одной из карточек.
Выполняется http-запрос DELETE на адрес http://localhost:7070/notes/{id}, где id — это идентификатор заметки.
После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7070/notes.
Обновление:

Вы нажимаете на кнопку «Обновить» — две зелёные стрелочки.
После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7070/notes.