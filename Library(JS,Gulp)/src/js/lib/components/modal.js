import $ from '../core';

// REFACTOR createMODAL !

$.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(200);
            document.body.style.overflow = 'hidden';
            preventModalShake();
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(200);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                $('.modal').moveX();
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });
    
        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(200);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                $('.modal').moveX();
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });


        
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text: {title: modalTitle, body: modalBody}, btns:{count: btnCount, settings: btnSettings}} = {}) {
    for (let i = 0; i< this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // btns = {count: num, settings: [[text, classNames=[], close, cb]]}
        const buttons = [];
        for (let j = 0;j < btnCount; j++){
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btnSettings[j][1]);
            btn.textContent = btnSettings[j][0];
            if (btnSettings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (btnSettings[j][3] && typeof(btnSettings[j][3]) === 'function') {
                btn.addEventListener('click', btnSettings[j][3]);
            }
            buttons.push(btn);
        }

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${modalTitle}
                    </div>
                </div>
                <div class="modal-body">
                    ${modalBody}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;

        modal.querySelector(".modal-footer").append(...buttons);
        document.body.appendChild(modal);

        preventModalShake();

        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(200);
        
    }

    
};

$.prototype.moveX = function(move) {
    for (let i = 0; i < this.length; i++) {
        if (!move) {
            this[i].style.transform = '';
        } else {
            this[i].style.transform = `TranslateX(${move}px)`;
        }
    }
};

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

function preventModalShake() {
    if (document.body.offsetHeight > document.documentElement.clientHeight) {
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
        $('.modal').moveX(-calcScroll() / 2);
        console.log('test');
    }
}