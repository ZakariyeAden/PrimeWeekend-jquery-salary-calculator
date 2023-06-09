
$(document).ready(getStarted);

function getStarted(){
  console.log('Get started');
  $('#submit-btn').on('click', submitHandler);
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
  //✅ Empty the values
  // Dispaly and append the data in a table
  // Empty the values after submited
  // Start with global for the total Monthly and divide by 12
  // Add up all the data for Annual salary and / 12.May need to figure it out by adding in the function or ready now function ?
  // Console log the total Monthy varable
/* Have a function to delete the employees */
  // First console log if the button is being clicked
  // Have a delegation to target the tbody 
  // Target the parents to delete them all.
// * Once everthing works style it to make it look nice!


function submitHandler(e){
  e.preventDefault();
  console.log('Submit');

  //********* Get all the Values and log them ********* //
  let firstNameVal = $('#first-name').val();
  console.log('first name:', firstNameVal);

  let lastNameVal = $('#last-name').val();
  console.log('last name:', lastNameVal);

  let IDVal = $('#NumID').val();
  console.log('ID:', IDVal);

  let titleVal = $('#title').val();
  console.log('title:', titleVal);

  let annualSalaryVal = $('#annual-salary').val();
  console.log('annual salary:', annualSalaryVal);


  //********* Empty the values ********* //
  $('#first-name').val('');
  $('#last-name').val('');
  $('#NumID').val('');
  $('#title').val('');
  $('#annual-salary').val('');
  
  
  // #NumID
  // #annual-salary
}

{/* <input placeholder="First Name" id="first-name" type="text"/>
<input placeholder="Last Name" id="last-name" type="text"/>
<input placeholder="ID" id="NumID" type="number"/>
<input placeholder="Annual Salary" id="annual-salary" type="number"/> */}