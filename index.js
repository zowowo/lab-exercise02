/*- pictures from one page to another
    - addrow
- delete row */


document.getElementById("formtbl").addEventListener("btn-submit", function (event) { event.preventDefault(); submitForm(); });

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

function allLetter(inputtxt) {
    var letters = /^[a-z]*$/i;
    if (!inputtxt.value.match(letters)) {
        alert('Please input letters only');
    }
}

function submitForm() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course_slct").value;
    let role = document.getElementById("role_slct").value;
    window.location.href = "index2.html?name=" + name + "&course_slct=" + course + "&role_slct" + role;
}

