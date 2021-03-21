import {getResource} from '../services/requests';

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          sizeBlockOptions = document.querySelectorAll('#size option'),
          materialBlock = document.querySelector(material),
          materialBlockOptions = document.querySelectorAll('#material option'),
          optionsBlock = document.querySelector(options),
          optionBlockOptions = document.querySelectorAll('#options option'),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    function clearAllOptions() {
        sizeBlockOptions.forEach(option => option.remove());
        materialBlockOptions.forEach(option => option.remove());
        optionBlockOptions.forEach(option => option.remove());
    }

    clearAllOptions();

    const createSelectOptions = (url, block) => {
        getResource(url)
        .then(res => createOptions(res, block))
        .catch(error => console.log(error)); 
    }

    async function createOptions (res, selector) {
        await res.forEach(({optionName, value, description}) => {
            let option = document.createElement('option');

            option.value = value;

            option.innerText = optionName;

            if (description) {
                option.title = description;
            }
            
            selector.appendChild(option);
        });
    };

    createSelectOptions('http://localhost:3004/paintingSize', sizeBlock);
    createSelectOptions('http://localhost:3004/paintingMaterial', materialBlock);
    createSelectOptions('http://localhost:3004/paintingOptions', optionsBlock);

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;