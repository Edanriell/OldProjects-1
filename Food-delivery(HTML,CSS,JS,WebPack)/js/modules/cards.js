import {getResource} from '../services/services';

function cards() {
    //CARDS

    class Card {
        constructor(img, alt, title, desc, price, parentSelector, ...classes) {
            this.img = img,
            this.alt = alt,
            this.title = title,
            this.desc = desc,
            this.price = price,
            this.classes =  classes,
            this.parent = document.querySelector(parentSelector),
            this.transfer = 27,
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        renderCard() {
            const renderedCard = document.createElement('div');

            if (this.classes.length === 0) {
                this.renderedCard = 'menu__item';
                renderedCard.classList.add(this.renderedCard);
            } else {
                this.classes.forEach(className => renderedCard.classList.add(className));
            }

            renderedCard.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
        `;
        this.parent.append(renderedCard);
        }
    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new Card(img, altimg, title, descr, price, '.menu .container').renderCard();
            });
        });

}

export default cards;