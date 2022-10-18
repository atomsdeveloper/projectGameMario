const jump = document.getElementById('jump');
const pipe = document.getElementById('tubo')

const jumpMario = () => {
    jump.classList.add('jump');

    setTimeout( () => {
        jump.classList.remove('jump')
    }, 500);
};

const loop = setInterval ( () => {

    const tubo = pipe.offsetLeft;
    const mario = +window.getComputedStyle(jump).bottom.replace('px', ''); /* Pegando o style computado na janela do navegador 'window.getComputerStyle() especificamente a propriedade 'bottom' e trocando com 'repace' o 'px' por nada. '  */

    if (tubo <= 110 && tubo > 0 && mario <= 60) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${tubo}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${mario}px`;
        mario.src = ''
    }

} , 10);

document.addEventListener  ('keydown', jumpMario);