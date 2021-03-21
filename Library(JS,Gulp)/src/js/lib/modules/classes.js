import $ from '../core';

$.prototype.addClass = function(...classNames){
    if (!classNames || classNames == '') {
        return this;
    }
    
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClass = function(...classNames){
    if (!classNames || classNames == '') {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function(classNames){
    if (!classNames || classNames == '') {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }

    return this;
};