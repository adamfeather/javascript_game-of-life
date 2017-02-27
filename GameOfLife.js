var gridWidth = 20;
var gridHeight = 10;

var grid = initializeGrid(gridWidth, gridHeight);

grid.forEach(currentItem => {
    currentItem.forEach(currentItem => {
        console.log(currentItem);
    });
});

function initializeGrid(width, height) {
    var grid = [];

    for (h = 0; h < height; h++) {
        grid[h] = [];
        for (w = 0; w < width; w++) {
            grid[h][w] = h + "," + w;
        }
    }

    return grid;
}