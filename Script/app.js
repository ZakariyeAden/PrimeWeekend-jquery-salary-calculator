$(document).ready(getStarted);
let totalMonthly = 0;
function getStarted() {
  console.log("Get started");
  $("#submit-btn").on("click", submitHandler);

  // Total Monthly
  totalMonthly = Number($("#total-monthly").text());
  console.log('Total Monthly inside getStarted', totalMonthly);

  // Remove the Employee
  $('#content').on('click', '.delete', deleteHandler);
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
/* Have a function to delete the employees */
  //✅ First console log if the button is being clicked
  //✅ Have a delegation to target the tbody
  //✅ Target the parents to delete them all.
  // Decrease the monthly
  // * Once everthing works style it to make it look nice!  

function submitHandler(e) {
  e.preventDefault();
  console.log("Submit");

  //********* Get all the Values and log them ********* //
  let firstNameVal = $("#first-name").val();
  console.log("first name:", firstNameVal);

  let lastNameVal = $("#last-name").val();
  console.log("last name:", lastNameVal);

  let IDVal = $("#NumID").val();
  console.log("ID:", IDVal);

  let titleVal = $("#title").val();
  console.log("title:", titleVal);

  let annualSalaryVal = $("#annual-salary").val();
  console.log("annual salary:", annualSalaryVal);

  totalMonthly = annualSalaryVal / 12;
  console.log('totally Montly inside submitHandler', totalMonthly);
  // Change the color in even but still in progress. Have to target since it prints a new row each time
  // $( ".row:nth-child(even)" ).css('background-color', 'black' );

  //********* Empty the values ********* //
  $("#first-name").val("");
  $("#last-name").val("");
  $("#NumID").val("");
  $("#title").val("");
  $("#annual-salary").val("");


  //********* Total Monthly ********* //
  $("#total-monthly").text(totalMonthly);
 //********* Append the data or display in the DOM ********* //
  $("#content").append(`
  <tr class="row">          
    <td class="data">${firstNameVal}</td>
    <td class="data">${lastNameVal}</td>
    <td class="data">${IDVal}</td>
    <td class="data">${titleVal}</td>
    <td class="data">${annualSalaryVal}</td>
    <td class="data"><button class="delete">Delete</button></td>
  </tr>
  `);
}

function deleteHandler(){
  console.log('delete');
  //********* Total Monthly ********* //
  console.log('total in delete', totalMonthly)
   $("#total-monthly").text(totalMonthly);
  $(this).parent().parent().remove();
}

