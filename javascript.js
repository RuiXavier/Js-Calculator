//Button Effects Section
const OPERATOR_COLOR = 'white';
const OPERATOR_BG_COLOR = '#FF9933'

let operatorBtns = document.querySelectorAll('.op-btn');
let currentOpBtn = '';

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(currentOpBtn !== '' && currentOpBtn !== btn.id){
            let tmp = document.querySelector(`#${currentOpBtn}`);
            changeColor(tmp, OPERATOR_COLOR, OPERATOR_BG_COLOR, 0.4);
        }
        changeColor(btn, OPERATOR_BG_COLOR, OPERATOR_COLOR, 0.4);
        currentOpBtn = btn.id;
    })
})

function changeColor(btn, color, bgColor, time) {
    btn.style.transition = `color ${time}s, background-color ${time}`;
    btn.style.color = color;
    btn.style.backgroundColor = bgColor;
}

const SPECIAL_COLOR = 'black';
const SPECIAL_BG_COLOR = '#C0C0C0';
const SPECIAL_BG_COLOR_EFFECT = '#FFFFFF';

let specialBtns = document.querySelectorAll('.special-btn');

specialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeColor(btn, SPECIAL_COLOR, SPECIAL_BG_COLOR_EFFECT, 0.4);

        setTimeout(function () {
            changeColor(btn, SPECIAL_COLOR, SPECIAL_BG_COLOR, 0.4);
        }, 300);

    })
})

const NUMBERS_COLOR = 'white';
const NUMBERS_BG_COLOR = '#606060';
const NUMBERS_BG_COLOR_EFFECT = '#E0E0E0';

let numBtns = document.querySelectorAll('.num-btn, .dec-point-btn');

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeColor(btn, NUMBERS_COLOR, NUMBERS_BG_COLOR_EFFECT, 0.3);

        setTimeout(function () {
            changeColor(btn, NUMBERS_COLOR, NUMBERS_BG_COLOR, 0.3);
        }, 400);

    })
})