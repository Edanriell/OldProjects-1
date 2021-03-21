import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import checkWindowType from './modules/checkWindowType';
import checkWindowGlazing from './modules/checkWindowGlazing';
import checkLastModal from './modules/checkLastModal';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2021-03-23';

    changeModalState(modalState);
    checkWindowType(modalState, '.balcon_icons_img', '.popup_calc_button');
    checkWindowGlazing(modalState, '.checkbox', '#view_type', '.popup_calc_profile_button');
    checkLastModal('.popup_calc_end input', '[data-sendData]');
    modals(modalState);
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
});