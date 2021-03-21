import $ from '../core';

$.prototype.addAttribute = function(one, two = ''){
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(one, two);
    }

    return this;
};

$.prototype.deleteAttribute = function(one, two = ''){
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(one, two);
    }

    return this;
};

$.prototype.clearAttributes = function() {
    for (let i = 0; i < this.length; i++) {
        let attributes = [];

        for (let attr of this[i].attributes) {
            attributes.push(attr.name);
        }

        attributes.forEach(attr => {
            this[i].removeAttribute(attr);
        });
    }

    return this;
}