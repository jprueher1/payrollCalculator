/*
Inmate Payroll Calculator
By: Josh Prueher
Date: 05/08/2015
This is a program to calculate regular hours and weekend/premium hours for 
inmate workers.  It also calculates their total pay according to the 
current Wisconsin Department of Corrections inmate pay rates. 
*/

function calculateRegularHours(weekdayInArray,weekdayOutArray){
  var result = 0;
  
  for(var index = 0; index < weekdayInArray.length; index++){
    if(weekdayInArray[index] > weekdayOutArray[index]){
      alert("Start time greater than end time in a weekday field " +
            "Please check your inputs.");
    }else{
       // This forumla needs work, not calcualating correctly if time is not 
       // equal to full hours
      result += Number((weekdayOutArray[index] - weekdayInArray[index]) / 100);
    }
  }
  
  return(result);
}
                               
function calculateWeekendHours(weekendArrayIn,weekendArrayOut){
  var result = 0;

  for(var index = 0; index < weekendArrayOut.length; index++){
    if(weekendArrayIn[index] > weekendArrayOut[index]){
      alert("Start time greater than end time in a weekend field. " +
            "Please check your inputs.");
    }else{
      // This forumla needs work, not calcualating correctly if time is not 
      // equal to full hours
      result +=Number((weekendArrayOut[index] - weekendArrayIn[index]) / 100);
    }  
  }
  
  return(result);
}
                               
function getPayRate(payCode){
  var payPerHour;
  
  switch(payCode){
    case "1": 
      payPerHour = 0.12;
      break;
    case "2": 
      payPerHour = 0.19;
      break;
    case "3": 
      payPerHour = 0.26;
      break;
    case "4": 
      payPerHour = 0.35;
      break;
    case "5": 
      payPerHour = 0.42;
      break;
  }
    
  return(payPerHour);
}

function calculateTotalPay(pay,normalHours,premiumHours){
  var hourlyRate = pay;
  var premiumPay;
  var regularPay;
  var result;
  var specialHours = premiumHours;
  var weekdayHours = normalHours;
  
  hourlyRate*= 100;
  
  regularPay = Math.ceil(hourlyRate * weekdayHours) / 100;
  
  premiumPay = Math.ceil((hourlyRate + 2) * specialHours) / 100 ;
  
  result = regularPay + premiumPay;
  
  return(result);

}

// Main Program Starts Here
function inmatePayrollCalculator(){
  // Inmate Payroll Calculator
  // Variable declarations
  var docNumber;
  var form;
  var inmateName;
  var inmateNumber;
  var lastName;
  var output;
  var payPerHour;
  var payRate;
  var regularHours;
  var totalPay;
  var weekendHours;
  var weekendInHours;
  var weekendOutHours;
  var weekdayInHours;
  var weekdayOutHours;
  var weekOneFridayIn;
  var weekOneFridayOut;
  var weekOneMondayIn;
  var weekOneMondayOut;
  var weekOneSaturdayIn;
  var weekOneSaturdayOut;
  var weekOneSundayIn;
  var weekOneSundayOut;
  var weekOneThursdayIn;
  var weekOneThursdayOut;
  var weekOneTuesdayIn;
  var weekOneTuesdayOut;
  var weekOneWednesdayIn;
  var weekOneWednesdayOut;
  var weekTwoFridayIn;
  var weekTwoFridayOut;
  var weekTwoMondayIn;
  var weekTwoMondayOut;
  var weekTwoSaturdayIn;
  var weekTwoSaturdayOut;
  var weekTwoSundayIn;
  var weekTwoSundayOut;
  var weekTwoThursdayIn;
  var weekTwoThursdayOut;
  var weekTwoTuesdayIn;
  var weekTwoTuesdayOut;
  var weekTwoWednesdayIn;
  var weekTwoWednesdayOut;
  
  // Assignments
  docNumber = document.getElementById("docNumberField");
  form = document.getElementById("payrollForm");
  lastName = document.getElementById("lastNameField");
  output = document.getElementById("outputArea");
  payRate = document.getElementById("payRateField");
  weekdayInHours = [];
  weekdayOutHours = [];
  weekendInHours = [];
  weekendOutHours = [];

  weekOneSundayIn = document.getElementById("weekOneSundayInField");
  weekOneSundayOut = document.getElementById("weekOneSundayOutField");
  weekOneMondayIn = document.getElementById("weekOneMondayInField");
  weekOneMondayOut = document.getElementById("weekOneMondayOutField");
  weekOneTuesdayIn = document.getElementById("weekOneTuesdayInField");
  weekOneTuesdayOut = document.getElementById("weekOneTuesdayOutField");
  weekOneWednesdayIn = document.getElementById("weekOneWednesdayInField");
  weekOneWednesdayOut = document.getElementById("weekOneWednesdayOutField");
  weekOneThursdayIn = document.getElementById("weekOneThursdayInField");
  weekOneThursdayOut = document.getElementById("weekOneThursdayOutField");
  weekOneFridayIn = document.getElementById("weekOneFridayInField");
  weekOneFridayOut = document.getElementById("weekOneFridayOutField");
  weekOneSaturdayIn = document.getElementById("weekOneSaturdayInField");
  weekOneSaturdayOut = document.getElementById("weekOneSaturdayOutField");
  weekTwoSundayIn = document.getElementById("weekTwoSundayInField");
  weekTwoSundayOut = document.getElementById("weekTwoSundayOutField");
  weekTwoMondayIn = document.getElementById("weekTwoMondayInField");
  weekTwoMondayOut = document.getElementById("weekTwoMondayOutField");
  weekTwoTuesdayIn = document.getElementById("weekTwoTuesdayInField");
  weekTwoTuesdayOut = document.getElementById("weekTwoTuesdayOutField");
  weekTwoWednesdayIn = document.getElementById("weekTwoWednesdayInField");
  weekTwoWednesdayOut = document.getElementById("weekTwoWednesdayOutField");
  weekTwoThursdayIn = document.getElementById("weekTwoThursdayInField");
  weekTwoThursdayOut = document.getElementById("weekTwoThursdayOutField");
  weekTwoFridayIn = document.getElementById("weekTwoFridayInField");
  weekTwoFridayOut = document.getElementById("weekTwoFridayOutField");
  weekTwoSaturdayIn = document.getElementById("weekTwoSaturdayInField");
  weekTwoSaturdayOut = document.getElementById("weekTwoSaturdayOutField");
  
  //Processing
  form.addEventListener('submit',function(event){
    event.preventDefault();
   
    weekendInHours.push(weekOneSundayIn.value);
    weekendInHours.push(weekOneSaturdayIn.value);
    weekendInHours.push(weekTwoSundayIn.value);
    weekendInHours.push(weekTwoSaturdayIn.value);
    weekendOutHours.push(weekOneSundayOut.value);
    weekendOutHours.push(weekOneSaturdayOut.value);
    weekendOutHours.push(weekTwoSundayOut.value);
    weekendOutHours.push(weekTwoSaturdayOut.value);
    weekdayInHours.push(weekOneMondayIn.value);
    weekdayInHours.push(weekOneTuesdayIn.value);
    weekdayInHours.push(weekOneWednesdayIn.value);
    weekdayInHours.push(weekOneThursdayIn.value);
    weekdayInHours.push(weekOneFridayIn.value);
    weekdayInHours.push(weekTwoMondayIn.value);
    weekdayInHours.push(weekTwoTuesdayIn.value);
    weekdayInHours.push(weekTwoWednesdayIn.value);
    weekdayInHours.push(weekTwoThursdayIn.value);
    weekdayInHours.push(weekTwoFridayIn.value);
    weekdayOutHours.push(weekOneMondayOut.value);
    weekdayOutHours.push(weekOneTuesdayOut.value);
    weekdayOutHours.push(weekOneWednesdayOut.value);
    weekdayOutHours.push(weekOneThursdayOut.value);
    weekdayOutHours.push(weekOneFridayOut.value);
    weekdayOutHours.push(weekTwoMondayOut.value);
    weekdayOutHours.push(weekTwoTuesdayOut.value);
    weekdayOutHours.push(weekTwoWednesdayOut.value);
    weekdayOutHours.push(weekTwoThursdayOut.value);
    weekdayOutHours.push(weekTwoFridayOut.value);

    inmateNumber = docNumber.value;
    inmateName = lastName.value;
   
    payPerHour = getPayRate(payRate.value);
    
    weekendHours = calculateWeekendHours(weekendInHours,weekendOutHours);
                                         
    regularHours = calculateRegularHours(weekdayInHours,weekdayOutHours);
                                         
    totalPay = calculateTotalPay(payPerHour,regularHours,weekendHours);
    
    //Reset the arrays for next record                   
    weekendInHours.length = 0;
    weekendOutHours.length = 0;
    weekdayInHours.length = 0;
    weekdayOutHours.length = 0;
    
    // Output
    output.innerHTML += "DOC Number: " + inmateNumber + "<br>" +
                        "Last Name: " + inmateName + "<br>" +
                        "Regular Hours: " + regularHours.toFixed(2) + "<br>" +
                        "Weekend Hours: " + weekendHours.toFixed(2) + "<br>" +
                        "Total Pay : $" + totalPay.toFixed(2) + "<br>" +
                        "------------------------------------" + "<br>";  
    
  });

}

inmatePayrollCalculator();