const body = document.querySelector('body');
const btnChange = document.querySelector('#btnchange');

const changeColor = () => {
    let color = '#';
    for(let i = 0; i < 6; i++){
        const aleatorio = Math.floor(Math.random() * 16)
                            .toString(16);
        color += aleatorio;
    }
    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor);