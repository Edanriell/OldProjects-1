const checkWindowGlazing = (state, inputs, select, btnNext) => {
    const input = document.querySelectorAll(inputs);
    const btn = document.querySelector(btnNext);
    const selectOption = document.querySelector(select);

    input.forEach(item => {
        item.addEventListener('change', () => {
            if (state.profile && state.type) {
                console.log('you fuck up!3');
            btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        });
    });

    selectOption.addEventListener('change', () => {
        if (state.profile && state.type) {
            console.log('you fuck up!3');
        btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    })

};

export default checkWindowGlazing;