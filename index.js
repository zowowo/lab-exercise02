/*- pictures from one page to another
    - addrow
- delete row */

function addNewRow() {
    var maintable = table.insertRow(-1);

    var picture = document.getElementbyId("file");
    var name = document.getElementById("name");
    var role = document.getElementById("role_slct");
    var course = document.getElementById("course_slct");

    var row = {};
    var myTable = document.querySelector("table#tableProducts>tbody");
    row = myTable.insertRow();
    row.insertCell(-1).textContent = "dummy";
    var lastRow = row;
    var lastCell = lastRow.cells[lastRow.cells.length - 1];
    lastCell.innerHTML = "<button id='btnEdit';>Editar</button>";
}

function deleteRow() {
    var table = document.getElementById("tbl_prof")
    var rowIndex = row.parentNode.parentNode.rowIndex;
    table.deleteRow(rowIndex);
}

