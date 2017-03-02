function convert2dArrayToHtmlTable(array) {
    var result = "<table>";
    for (var r = 0; r < array.length; r++) {
        result += "<tr>";
        for (var c = 0; c < array[r].length; c++) {
            result += "<td>" + (array[r][c] === true ? "X" : " ") + "</td>";
        }
        result += "</tr>\n";
    }
    return result + "</table>";
}