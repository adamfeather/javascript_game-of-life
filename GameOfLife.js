function gameOfLife(rows, columns) {
    var _currentGeneration = _initializeGrid(rows, columns);

    function _initializeGrid(rows, columns) {
        var grid = [];
        for (r = 0; r < rows; r++) {
            grid[r] = [];
            for (c = 0; c < columns; c++) {
                grid[r][c] = _getRandonBoolean();
            }
        }
        return grid;
    }

    function _getRandonBoolean() {
        return Math.random() >= 0.5;
    }

    function _getActiveCellCountSurrounding(row, column) {
        var surroundingActiveCellCount = 0;
        for (var y = -1; y <= 1; y++) {
            for (var x = -1; x <= 1; x++) {
                var isSelf = (y === 0 && y === 0);
                var isOutOfYBounds = ((row + y) < 0 || (row + y) >= rows);
                var isOutOfXBounds = ((column + x) < 0 || (column + x) >= columns);
                if (isSelf || isOutOfYBounds || isOutOfXBounds) continue;
                surroundingActiveCellCount += (_currentGeneration[row + y][column + x] ? 1 : 0);
            }
        }
        return surroundingActiveCellCount;
    }

    function _isAliveNextGeneration(isCurrentlyAlive, surroundingCellCount) {
        if (isCurrentlyAlive && surroundingCellCount < 2) return false;
        if (isCurrentlyAlive && surroundingCellCount === 2 || surroundingCellCount === 3) return true;
        if (isCurrentlyAlive && surroundingCellCount > 3) return false;
        if (isCurrentlyAlive == false && surroundingCellCount === 3) return true;
        return false;
    }

    this.generateNextGeneration = function () {
        var nextGeneration = [];

        for (r = 0; r < rows; r++) {
            nextGeneration[r] = [];
            for (c = 0; c < columns; c++) {
                var isCurrentlyAlive = _currentGeneration[r][c];
                var surroundingCellCount = _getActiveCellCountSurrounding(r, c);
                nextGeneration[r][c] = _isAliveNextGeneration(isCurrentlyAlive, surroundingCellCount);
            }
        }
        _currentGeneration = nextGeneration;
    }

    this.getCurrentGeneration = function(){
        return _currentGeneration;
    }
}