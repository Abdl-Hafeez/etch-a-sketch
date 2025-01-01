const input = document.querySelector('#num_of_squares');
const inputBtn = document.querySelector('#input-btn');
const container = document.querySelector('.container');

for(let i = 1; i <= 16; i++) {
    for(let j = 1; j <= 16; j++) {
        const divs = document.createElement('div');
        divs.setAttribute('style', 
                'flex: 0 0 25px;  border: 1px solid  #333;');           
        divs.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        });
        container.appendChild(divs);
    } 
}

function renderGrid() {
    const userInput = parseInt(input.value);
    const squareSize = 400 / userInput;
    container.innerHTML = '';
    for(let i = 1; i <= userInput; i++) {
        for(let j = 1; j <= userInput; j++) {
            const divs = document.createElement('div');
            divs.setAttribute('style', 
                `flex: 0 0 ${squareSize}px; 
                height: ${squareSize}px; 
                border: 1px solid  #333;`);         
            divs.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            });
            container.appendChild(divs);
        } 
    }
}

inputBtn.addEventListener('click', renderGrid);



