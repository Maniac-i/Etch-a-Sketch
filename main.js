


    let number = 16;
    makeGrid(number);

    function makeGrid(number) {
        for (let i=0; i < number; i++) {
            for (let j=0; j < number; j++) {
                const rows = document.createElement('div');
                const container = document.getElementById('container')
                rows.setAttribute('class', 'rows');
                container.appendChild(rows);
            }    
        } 
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    }

    
    //create new grid with on button
    let newGrid = document.getElementById('newGrid');
    newGrid.addEventListener('click', () => {
        let number = prompt('Enter a number');
        let container = document.getElementById('container');
        container.textContent = '';
        makeGrid(number);
        runEvent();
    })
    
    //change background color to black
    function runEvent() {
        let changeClass = document.querySelectorAll('.rows');
        changeClass.forEach((item) => { 
        item.addEventListener('mouseover', e => { 
            item.classList.add('black');
     })
})       
    
} 
runEvent();