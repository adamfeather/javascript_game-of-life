var gridWidth = 10;
var gridHeight = 10;
var grid = [];

for (i = 0; i < gridWidth; i++) {
    grid[i] = [];
    for (j = 0; j < 10; j++) {
        grid[i][j] = i + "|" + j;
    }
}

grid.forEach(currentItem => {
    currentItem.forEach(currentItem => {
        console.log(currentItem);
    });
});