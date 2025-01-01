const input = document.querySelector('#num_of_squares');
const inputBtn = document.querySelector('#input-btn');
const container = document.querySelector('.container');

function renderGrid(input) {
    const squareSize = 400 / input;
    container.innerHTML = '';
    for(let i = 1; i <= input; i++) {
        for(let j = 1; j <= input; j++) {
            const divs = document.createElement('div');
            divs.setAttribute('style', 
                `flex: 0 0 ${squareSize}px; 
                height: ${squareSize}px; 
                border: 1px solid  #333;
                transition: background-color 0.3s ease;`);         
            divs.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            });
            container.appendChild(divs);
        } 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderGrid(16);
});

inputBtn.addEventListener('click',() => {
    const userInput = parseInt(input.value);
    renderGrid(userInput);
});



