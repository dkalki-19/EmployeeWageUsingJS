// UC - 1
{  const IS_ABSENT = 0;
   let empCheck =  Math.floor(Math.random()*10)%2;
   if( empCheck == IS_ABSENT ){
       console.log("UC1 - Employee is ABSENT. Existing the program");
       return;
   }else{
       console.log("UC1 - Employee is PRESENT");
   }
}

// UC - 2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random()*10)%3;
    switch(empCheck){
        case IS_PART_TIME :
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME :
            empHrs = FULL_TIME_HOURS;
            break;
        default :
            empHrs = 0;
    }

    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC2 - Emp Wage : "+empWage);
}

// UC - 3
{
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME :
            return PART_TIME_HOURS;
        case IS_FULL_TIME :
            return FULL_TIME_HOURS;
        default :
            return 0;
    }
}

let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : "+empWage);
}

// UC - 4
{
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs+=getComputedStyle(empCheck);
}
let empWage = empHrs*WAGE_PER_HOUR;
console.log("UC4 - Total Hrs : "+empHrs+" Emp Wage : "+empWage);

}