let result = 0;
let buffer = '0';
let calcBuffer ='';
let operator;
let clean = false;

const calcs = document.querySelector('.calculations');

const display = document.querySelector('.display');

function buttonPress(content){
    if(isNaN(content))
        symbolHandler(content);
    else{
        numberHandler(content);
    }

    display.textContent = buffer;
    if(clean === true){
        clean = false;
        calcs.textContent = calcBuffer;
        calcBuffer = buffer;
    } else{
        calcs.textContent = calcBuffer;
    }
    
}

function symbolHandler(symbol){
    switch(symbol){
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }
            else{
                buffer = buffer.substring(0, buffer.length - 1);
            }

            if(calcBuffer.charAt(calcBuffer.length -1) !== operator)
                calcBuffer = calcBuffer.substring(0, calcBuffer.length - 1);
                
            break;
        case 'AC':
            buffer = '0';
            result = 0;
            calcBuffer = '';
            break;
        case ',':
            buffer += '.';
            break;
        case '=':
            if(operator === null)
                return

            flushOperation(parseFloat(buffer));
            operator = null;
            buffer = result;
            result = 0;
            calcBuffer += symbol + buffer;
            clean = true;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;

        default:
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0')
        return;

    const num = parseFloat(buffer);

    if(result === 0)
        result = num;
    else
        flushOperation(num);

    operator = symbol;
    calcBuffer += symbol;
    buffer = '0';
}

function flushOperation(num){
    if(operator === '+')
        result += num;
    else if(operator === '−')
        result -= num;
    else if(operator === '×')
        result *= num;
    else if(operator === '÷')
        result /= num;
}

function numberHandler(number){
    if(buffer === '0'){
        buffer = number;
    } else {
        buffer += number;
    }

    calcBuffer += number;
    
}

const SPECIAL_COLOR = 'black';
const SPECIAL_BG_COLOR = '#C0C0C0';
const SPECIAL_BG_COLOR_EFFECT = '#FFFFFF';
const specBtns = document.querySelectorAll('.spec-btn');

specBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeColor(btn, SPECIAL_COLOR, SPECIAL_BG_COLOR_EFFECT, 0.5);

        setTimeout(function () {
            changeColor(btn, SPECIAL_COLOR, SPECIAL_BG_COLOR, 0.5);
        }, 400);
    })
})

const OPERATOR_COLOR = 'white';
const OPERATOR_BG_COLOR = '#FF9933';
const opBtns = document.querySelectorAll('.op-btn');

opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        opBtns.forEach(opBtn => {
            if(opBtn !== btn){
                changeColor(opBtn, OPERATOR_COLOR, OPERATOR_BG_COLOR, 1);
            } else {
                changeColor(opBtn, OPERATOR_BG_COLOR, OPERATOR_COLOR, 1);
            }
        })
    })
})

function changeColor(btn, color, bgColor, time) {
    btn.style.transition = `color ${time}s, background-color ${time}s`;
    btn.style.color = color;
    btn.style.backgroundColor = bgColor;
}

const eqBtn = document.querySelector('#eq');

eqBtn.addEventListener('click', () => {
    changeColor(eqBtn, OPERATOR_BG_COLOR, OPERATOR_COLOR, 0.5);

    setTimeout(function () {
        changeColor(eqBtn, OPERATOR_COLOR, OPERATOR_BG_COLOR, 0.5);
    }, 200)

    opBtns.forEach(btn => {
        changeColor(btn, OPERATOR_COLOR, OPERATOR_BG_COLOR, 1);
    })
})

const NUMBERS_COLOR = 'white';
const NUMBERS_BG_COLOR = '#606060';
const NUMBERS_BG_COLOR_EFFECT = '#E0E0E0';

let numBtns = document.querySelectorAll('.num-btn, .dec-point-btn');

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeColor(btn, NUMBERS_COLOR, NUMBERS_BG_COLOR_EFFECT, 1);

        setTimeout(function () {
            changeColor(btn, NUMBERS_COLOR, NUMBERS_BG_COLOR, 1);
        }, 400);

    })
})

const btns = document.querySelectorAll('.calc-btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        buttonPress(btn.textContent);
    })
})