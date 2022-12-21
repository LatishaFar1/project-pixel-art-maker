// Select color input

const pickColor = document.getElementById('colorPicker');
const pickSize = document.getElementById('sizePicker');

const table = document.querySelector('#pixelCanvas');

makeGrid(20,25);

pickSize.addEventListener('submit', (e) => {
    e.preventDefault();

    while(table.hasChildNodes()){
        table.removeChild(table.firstChild)
    }
    const height = document.getElementById('inputHeight');
    const width = document.getElementById('inputWidth');
    makeGrid(height.value, width.value);
});


function makeGrid(height, width) {

    for(let i=0; i < height; i++){
        let row = table.insertRow(i);

        for(let j=0; j < width; j++){
            let node = row.insertCell(j)

            node.style.backgroundColor = '#7785AC'

            node.addEventListener('click', (e) => {
                e.preventDefault();
                node.style.backgroundColor = pickColor.value;
            })
        }
    }

}
