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
        return 0;
    }

    function _isAliveNextGeneration(isCurrentlyAlive, surroundingCellCount){
        if (isCurrentlyAlive && surroundingCellCount < 2) return false;
        if (isCurrentlyAlive && surroundingCellCount === 2 || surroundingCellCount === 3 )  return true;
        if (isCurrentlyAlive && surroundingCellCount > 3 )  return false;
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

    this.getCurrentGenerationAsHtmlTable = function () {
        var result = "<table>";
        for (var r = 0; r < rows; r++) {
            result += "<tr>";
            for (var c = 0; c < columns; c++) {
                result += "<td>" + (_currentGeneration[r][c] === true ? "X" : " ") + "</td>";
            }
            result += "</tr>\n";
        }
        result += "</table>";

        return result;
    }
}