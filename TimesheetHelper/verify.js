var allInputs = document.getElementsByTagName("input");
var button_index;
for(var index=0; index<allInputs.length; ++index) {
  if (allInputs[index].value == 'Submit') {
    button_index = index;
    break;
  }
}

var button_color = allInputs[button_index].style.backgroundColor;
allInputs[button_index].style.backgroundColor = 'Silver';
allInputs[button_index].style.color = 'LightGray';
allInputs[button_index].disabled = true;

document.forms["_TimeSheet"]["mgr_name"].value = 'Jerzy Nogiec';

var hrs_inputs = ["BillHrs01", "BillHrs02", "BillHrs03", "BillHrs04", "BillHrs05"];
var exp_inputs = ["Explain01", "Explain02", "Explain03", "Explain04", "Explain05"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (i = 0; i < 5; ++i) {
  document.forms["_TimeSheet"][hrs_inputs[i]].style.backgroundColor='red';
  document.forms["_TimeSheet"][hrs_inputs[i]].style.color='white';
  document.forms["_TimeSheet"][exp_inputs[i]].style.backgroundColor='red';
}
for (i = 0; i < 5; ++i) {
  var hours = parseInt(prompt("Enter hours worked on " + days[i] + "..."));
  if (isNaN(hours)) hours = 8;
  document.forms["_TimeSheet"][hrs_inputs[i]].value = hours;
  document.forms["_TimeSheet"][hrs_inputs[i]].style.backgroundColor='white';
  document.forms["_TimeSheet"][hrs_inputs[i]].style.color='black';
  document.forms["_TimeSheet"][exp_inputs[i]].value = prompt("Enter explaination for " + days[i] + "...");
  document.forms["_TimeSheet"][exp_inputs[i]].style.backgroundColor='white';
}

allInputs[button_index].style.backgroundColor = button_color;
allInputs[button_index].style.color = 'white';
allInputs[button_index].disabled = false;
