const min = 150;

const columnTypeToRationMap = {
    numeric: 1,
    'text-short': 1.67,
    'text-long': 3.33
};


const table = document.querySelector('table');
console.log('table: ', table);


const columns = [];
let headerBeingResized;

const onMouseMove = (event) => requestAnimationFrame(() => {
    console.log('onMouseMove!!!');
    const horizontalScrollOffset = document.documentElement.scrollLeft;
    const widthValue = (horizontalScrollOffset + event.x) - headerBeingResized.offsetLeft;
    const column = columns.find(column => column.header === headerBeingResized);

    column.size = Math.max(min, widthValue) + 'px';


    columns.forEach((column) => {

        if (column.size.startsWith('minmax')) {
            column.size = parseInt(column.header.clientWidth, 10) + 'px';

        }

    });
    
    


    const gridTemplateColumnsValue = columns
        .map(({
            header,
            size
        }) => size)
        .join(' ');

    table.style.gridTemplateColumns = gridTemplateColumnsValue;

});

const onMouseUp = () => {
    console.log('onMouseUp!');

    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    headerBeingResized.classList.remove('header-beining-resized');
    headerBeingResized = null;
};



const initResize = ({
    target
}) => {
    console.log('initResize on target: ', target);
    headerBeingResized = target.parentNode;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    headerBeingResized.classList.add('header-beining-resized');

}




document.querySelectorAll('th').forEach(header => {
    const max = columnTypeToRationMap[header.dataset.type] + 'fr';

    columns.push({
        header,
        size: `minmax(${min}px, ${max})`
    });

    header.querySelector('.handle-resize').addEventListener('mousedown', initResize);

});


console.log('columns: ', columns);
