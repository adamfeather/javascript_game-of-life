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

    this.getCurrentGenerationAsHtmlTable = function () {
        var result = "<table>";
        for (var r = 0; r < rows; r++) {
            result += "<tr>";
            for (var c = 0; c < columns; c++) {
                result += "<td>" + (_currentGeneration[r][c] === true ? "X" : "-") + "</td>";
            }
            result += "</tr>\n";
        }
        result += "</table>";

        return result;
    }
}