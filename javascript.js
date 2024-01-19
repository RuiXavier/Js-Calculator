//Button Effects Section

let operatorBtns = document.querySelectorAll('.operator-button');

let currentOpBtn = '';

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(currentOpBtn !== '' && currentOpBtn !== btn.id){
            let tmp = document.querySelector(`#${currentOpBtn}`);
            changeColor(tmp, 'white', '#FF9933');
        }
        changeColor(btn, '#FF9933', 'white');
        currentOpBtn = btn.id;
    })
})

function changeColor(btn, color, bgColor) {
    btn.style.color = color;
    btn.style.backgroundColor = bgColor;
}



