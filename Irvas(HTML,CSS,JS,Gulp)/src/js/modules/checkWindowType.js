const checkWindowType = (state, windowTypes, btnNext) => {
    const windows = document.querySelectorAll(windowTypes);
    const btn = document.querySelector(btnNext);
    const inputs = document.querySelectorAll('.popup_calc_content > input');

    windows.forEach(item => {
        item.addEventListener('click', () => {
            if (isFinite(state.form) && state.width && state.height) {
                console.log('you fuck up!');
            btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        });
    });

    inputs.forEach(item => {
        item.addEventListener('input', () => {
            if (isFinite(state.form) && state.width && state.height ) {
                console.log('you fuck up!2');
            btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        })
    })
};

export default checkWindowType;