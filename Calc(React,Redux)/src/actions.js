export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rndPos = () => {
    return {type: 'RNDPOS', value: Math.floor(Math.random() *10)}};
export const rndNeg = () => {
    return {type: 'RNDNEG', value: Math.floor(Math.random() * -10)}};
export const reset = () => ({type: 'CLEAR'});