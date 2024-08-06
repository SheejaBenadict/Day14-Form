
document.getElementById("add").addEventListener("click", addFunction);

function addFunction() {
    // get the values from input text
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.getElementById("gender").value;
    let food = document.getElementById("food").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    //Get the table by Id  
    let myTable = document.getElementById("myTable");
    // create new row and cells
    let row = myTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    let cell9 = row.insertCell(8);
    // Set the values into new rows
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = email;
    cell4.innerHTML = address;
    cell5.innerHTML = pincode;
    cell6.innerHTML = gender;
    cell7.innerHTML = food;
    cell8.innerHTML = state;
    cell9.innerHTML = country;
}
// For delete row
document.getElementById("delete").addEventListener("click", deleteFunction);
function deleteFunction() {
    document.getElementById("myTable").deleteRow(-1);
}
// document.getElementById("reset").addEventListener("click",reset);
function myFunction() {
    document.getElementById("myForm").reset();
}




