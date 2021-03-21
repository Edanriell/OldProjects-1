const checkLastModal = (inputs, btnNext) => {
    const name = document.querySelectorAll(inputs)[0];
    const phone = document.querySelectorAll(inputs)[1];
    const btn = document.querySelector(btnNext);

    name.addEventListener('input', () => {
        if(name.value && phone.value) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });

    phone.addEventListener('input', () => {
        if(name.value && phone.value) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });

};

export default checkLastModal;