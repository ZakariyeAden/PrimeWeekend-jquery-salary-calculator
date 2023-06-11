$(document).ready(getStarted);
let totalMonthly = 0;
let firstNameVal;
let lastNameVal;
let IDVal;
let titleVal;
let annaulSalaryVal;
let updateTotalMonth;
let tableSalary = {
  firstNameValue: firstNameVal,
  lastNameValue: lastNameVal,
  IDValue: IDVal,
  titleValue: titleVal,
  annaulSalaryValue: annaulSalaryVal,
  totalMonthValue: totalMonthly,
};

function getStarted() {
  console.log("Get started");
  $("#submit-btn").on("click", submitHandler);

  // Total Monthly
  tableSalary.totalMonthValue = Number($("#total-monthly").text());

  // Update the total month
  // tableSalary.totalMonthValue = Number($("#total-monthly").text(updateTotalMonth));
  // console.log('Update Total in getStarted:', updateTotalMonth);
  // Remove the Employee
  $("#content").on("click", ".delete", deleteHandler);
}
// ***********************************************************
// ****************** PLAN/PSEUDO CODE ******************** //
// ***********************************************************
// ✅ Add in the HTML Elements and format.
// ✅Add ID for the Inputs and submit
/* Have a function to for adding all of the inputs */
//✅ Add event Listener for submit button and add the function
//✅ Test the console log
//✅ Get all the value for the first name,last name, id, title, and annual salary
//✅ Console log all the data
//✅ Empty the values after submited
//✅ Dispaly and append the data in a table
//✅ Start with global for the total Monthly and divide by 12
//✅ Add up all the data for Annual salary and / 12.May need to figure it out by adding in the function or ready now function ?
//✅ Console log the total Monthy varable
//✅ Change the Monthly after it exceed $20,000. Need to use if statement and get the css method.
/* Have a function to delete the employees */
//✅ First console log if the button is being clicked
//✅ Have a delegation to target the tbody
//✅ Target the parents to delete them all.
//✅ Have to use use an object in order to start on the monthly decrease
// Decrease the monthly
//✅ * Once everthing works style it to make it look nice!

function submitHandler(e) {
  e.preventDefault();
  console.log("Submit");

  //********* Get all the Values and log them ********* //
  tableSalary.firstNameValue = $("#first-name").val();

  tableSalary.lastNameValue = $("#last-name").val();

  tableSalary.IDValue = $("#NumID").val();

  tableSalary.titleValue = $("#title").val();

  tableSalary.annaulSalaryValue = $("#annual-salary").val();

  tableSalary.totalMonthValue = tableSalary.annaulSalaryValue / 12;
  console.log('Montly in get Started:', tableSalary.totalMonthValue.toFixed(2));

  // Change the color in even but still in progress. Have to target since it prints a new row each time
  // $( ".row:nth-child(even)" ).css('background-color', 'black' );

  //********* Empty the values ********* //
  $("#first-name").val("");
  $("#last-name").val("");
  $("#NumID").val("");
  $("#title").val("");
  $("#annual-salary").val("");

  if (tableSalary.totalMonthValue > 20000) {
    $("#total-monthly").css("background-color", "red");
  }
  //********* Total Monthly ********* //
  $("#total-monthly").text(tableSalary.totalMonthValue);
  //********* Append the data or display in the DOM ********* //
  $("#content").append(`
  <tr class="row">          
    <td class="data">${tableSalary.firstNameValue}</td>
    <td class="data">${tableSalary.lastNameValue}</td>
    <td class="data">${tableSalary.IDValue}</td>
    <td class="data">${tableSalary.titleValue}</td>
    <td class="data">${tableSalary.annaulSalaryValue}</td>
    <td class="data"><button class="delete">Delete</button></td>
  </tr>
  `);
  console.log("Table:", tableSalary);
}

function deleteHandler() {
  //********* Total Monthly ********* //
  // Trying to figuere out what gets deleted
  console.log("table in delete", tableSalary);
  console.log('totalMonth in delete',tableSalary.totalMonthValue);

  
  
  // I THINK WE HAVE TO UPDATE THE TOTAL MONTH HERE
  updateTotalMonth = totalMonthly--;
  // REMOVE 
  $(this).parent().parent().remove();
  $("#total-monthly").remove(totalMonthly);
  // Update ?
  $("#total-monthly").text(updateTotalMonth);
 

}
