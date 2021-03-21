/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adBlock = document.querySelectorAll('.promo__adv > img');
    const genre = document.querySelector('.promo__genre');
    const backImg = document.querySelector('.promo__bg');
    const interactiveList = document.querySelector('.promo__interactive-list');
    const input = document.querySelector('.adding__input');
    const submitBtn = document.querySelector('form.add');
    const isFavourite = document.querySelectorAll('.add input')[1];

    submitBtn.addEventListener('submit', function(evt) {
        evt.preventDefault();
        let newFilm = input.value[0].toUpperCase() + input.value.slice(1);
        const favourite = isFavourite.checked;

        // if (newFilm.length <= 21) {
        //     movieDB.movies.push(newFilm);
        //     addFavouriteMoovie();
        // } else {
        //     let newFilmShort = newFilm.slice(0, 21) + '...';
        //     movieDB.movies.push(newFilmShort);
        //     addFavouriteMoovie();
        // }


        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 21) + '...';
                // movieDB.movies.push(newFilmShort); 
            }

            if (favourite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);

            // clearInput();
            sortList(movieDB.movies);
            // clearList();
            createList(movieDB.movies, interactiveList);
        }

        evt.target.reset();

        // clearInput();
        // sortList(movieDB.movies);
        // clearList();
        // createList();
    });

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };
    
    const makeChangesOnPage = () => {
        genre.innerText = 'драма'.toUpperCase();

        backImg.style.cssText = 'background: url("./img/bg.jpg")';
    };

    const clearList = (list) => {
        list.innerHTML = '';
    };

    const sortList = (arr) => {
        arr.sort();
    };

    const addFavouriteMoovie = () => {
        if (isFavourite.checked) {
            console.log('Добавляем любимый фильм');
        }
    };

    const clearInput = () => {
        input.value = '';
    };

    const createList = (films, parent) => {
        clearList(interactiveList);
        sortList(films);
        films.forEach((item, index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1}. ${item}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((deleteBtn, i) => {
            deleteBtn.addEventListener('click', () => {
                films.splice(i,1);
                // console.log(movieDB.movies);
                // console.log(movieDB.movies.length);
                clearList(interactiveList);
                createList(films, parent);
            });
        });
    };

    deleteAdv(adBlock);
    makeChangesOnPage();
    // clearList(interactiveList);
    createList(movieDB.movies, interactiveList);

});