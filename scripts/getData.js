var ewa = null;

// Add event handler for onload event.
if (window.attachEvent) {
    window.attachEvent("onload", ewaOmPageLoad);
}
else {
    window.addEventListener("DOMContentLoaded", ewaOmPageLoad, false);
}

// Add event handler for applicationReady event.
function ewaOmPageLoad() {
    Ewa.EwaControl.add_applicationReady(getEwa);
}

function getEwa() {
    // Get a reference to the Excel Services Web Part.
    ewa = Ewa.EwaControl.getInstances().getItem(0);
}

function getRangeFromSheetButton() {
    // Get range "B2:C5" from the active sheet.
    var range = ewa.getActiveWorkbook().getActiveSheet().getRange(1, 0, 10, 3);

    // Get values from range.
    range.getValuesAsync(0, getRangeValues, range);
}

function getRangeValues(asyncResult) {
    // Get the value from asyncResult if the asynchronous operation was successful.
    if (asyncResult.getCode() == 0) {
        // Get range from user context.
        var range = asyncResult.getUserContext();

        // Get the array of range values from asyncResult.
        var values = asyncResult.getReturnValue();

        // Display range coordinates in A1 notation and associated values.
        var output = "Values from range" + range.getAddressA1() + "\n";
        output = output + "********\n";
        sessionStorage.clear();
        // Loop through the array of range values.
       // resetTable();
        //createTable();
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < values[i].length; j++) {
                output = output + values[i][j] + '\n';
            }
            sessionStorage.setItem(values[i][0], values[i][2]);

            var table = document.getElementById("myTableData");
            //     var origalTable = ` <tr>
            //     <th><b>File Name</b></th>
            //     <th><b>link</b></th>
            // </tr>`
            //     table.innerHTML= origalTable;

            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

            row.insertCell(0).innerHTML = values[i][0];
            //row.insertCell(1).innerHTML += `<input type="button" value = " ${values[i][2]}" onClick="Javacsript:render()`;
            //Create an input type dynamically.   
            var element = document.createElement("input");
            //Assign different attributes to the element. 
            element.type = "button";
            element.value = "btn"; // Really? You want the default value to be the type string?
            element.name = "btn1"; // And the name too?
            element.setAttribute("onclick", `render("${values[i][0]}")`);
            let newcell = row.insertCell(1);
            newcell.appendChild(element);

        }

        output = output + "********";

        // Display each value in the array returned by getValuesAsync.
        alert(output);
    }
    else {
        alert('Operation failed with error message ' + asyncResult.getDescription() + '.');
    }
}

function resetTable() {
    var table = document.getElementById("todelete");
    table.remove();
}
function createTable() {
    var table = document.getElementById("myTableData");
    var row = table.insertRow(0);
    row.insertCell(0).innerHTML = "File Name";
    row.insertCell(1).innerHTML = "Link";

}