const container = document.querySelector('.container');
for(let i = 1; i <= 16; i++) {
    
    for(let j = 1; j <= 16; j++) {
        // if(i ===15 && j === 15){
        //     container.style.flexWrap = 'wrap';
        // }
        const divs = document.createElement('div');
        divs.setAttribute('style', 
                'flex: 0 0 25px;  border: 1px solid #333;');           
        divs.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        })
        container.appendChild(divs);
    } 
}



