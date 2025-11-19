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
    empHrs+=getWorkingHours(empCheck);
}
let empWage = empHrs*WAGE_PER_HOUR;
console.log("UC4 - Total Hrs : "+empHrs+" Emp Wage : "+empWage);

}


// UC - 5
const MAX_HRS_IN_MONTH = 100;
const NO_OF_WORKING_DAYS = 10;
{
    
    let totalEmpHrs = 0;
    let totalWOrkingDays = 0;
    while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWOrkingDays < NO_OF_WORKING_DAYS){
        totalWOrkingDays++;
        let empCheck = Math.floor(Math.random()*10)%3;
        totalEmpHrs+=getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs*WAGE_PER_HOUR;
    console.log("UC5 - Total Days : "+totalWOrkingDays+" Emp Wage : "+empWage);
}

//UC - 6

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWageArray = [];
{


function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    dailyWageArray.push(calcDailyWage(empHrs));
}

console.log("UC6 - Daily Wage Array: ", dailyWageArray);
console.log("UC6 - Total Wage: " + (totalEmpHrs * WAGE_PER_HOUR));

}

// UC7

// (a) Total Wage using reduce
let totalWage = dailyWageArray.reduce((total, wage) => total + wage, 0);
console.log("UC7 (a) - Total Wage using Reduce: " + totalWage);

// (b) Day along with daily wage
let dayWageMap = dailyWageArray.map((wage, index) => `Day ${index+1} = ${wage}`);
console.log("UC7 (b) - Day + Daily Wage:\n", dayWageMap);

// (c) Days when full-time wage (160) earned
let fullTimeDays = dayWageMap.filter(day => day.includes("160"));
console.log("UC7 (c) - Full Time Wage Days: ", fullTimeDays);

// (d) First occurrence of full-time wage
let firstFullTimeDay = dayWageMap.find(day => day.includes("160"));
console.log("UC7 (d) - First Full Time Wage Day: ", firstFullTimeDay);

// (e) Check if every full-time wage is 160
let isAllFullTimeCorrect = fullTimeDays.every(day => day.includes("160"));
console.log("UC7 (e) - All full-time wages correct? : ", isAllFullTimeCorrect);

// (f) Check if any part-time wage (80)
let hasPartTime = dailyWageArray.some(wage => wage === 80);
console.log("UC7 (f) - Is there any Part-time Wage? : ", hasPartTime);

// (g) Number of days employee worked (wage > 0)
let workedDays = dailyWageArray.filter(wage => wage > 0).length;
console.log("UC7 (g) - Number of Days Employee Worked: ", workedDays);


// UC8 – Using Map to store Day wise Wage
let dayWiseWageMap = new Map();
let dayCount = 0;

for (let wage of dailyWageArray) {
    dayCount++;
    dayWiseWageMap.set(dayCount, wage);
}

console.log("UC8 - Day Wise Wage Map:");
console.log(dayWiseWageMap);

// Compute total wage using Map values
let totalWageFromMap = 0;
for (let wage of dayWiseWageMap.values()) {
    totalWageFromMap += wage;
}

console.log("UC8 - Total Wage using Map: " + totalWageFromMap);

{
// UC 9

let dailyHrsMap = new Map();
let day = 0;

// Build Daily Hours Map based on wages
for (let wage of dailyWageArray) {
    day++;
    let hours = wage / WAGE_PER_HOUR;
    dailyHrsMap.set(day, hours);
}

// (a) Total Wage and Total Hours using arrow functions
let totalHours = [...dailyHrsMap.values()].reduce((sum, hrs) => sum + hrs, 0);
let totalWage = [...dayWiseWageMap.values()].reduce((sum, wage) => sum + wage, 0);

console.log("UC9 (a) - Total Hours:", totalHours);
console.log("UC9 (a) - Total Wage:", totalWage);

// (b) Full day / Part day / No work day
let fullWorkingDays = [...dailyHrsMap.entries()].filter(([d, hrs]) => hrs === 8).map(([d, hrs]) => d);
let partWorkingDays = [...dailyHrsMap.entries()].filter(([d, hrs]) => hrs === 4).map(([d, hrs]) => d);
let noWorkingDays = [...dailyHrsMap.entries()].filter(([d, hrs]) => hrs === 0).map(([d, hrs]) => d);

console.log("UC9 (b) - Full Working Days:", fullWorkingDays);
console.log("UC9 (b) - Part Working Days:", partWorkingDays);
console.log("UC9 (b) - No Working Days:", noWorkingDays);

}

    // UC 10
let dailyDataArray = [];
day = 0;
{

for (let wage of dailyWageArray) {
    day++;
    let hours = wage / WAGE_PER_HOUR;
    dailyDataArray.push({
        day: day,
        hoursWorked: hours,
        wageEarned: wage
    });
}

console.log("UC10 - Daily Data Objects:\n", dailyDataArray);

}


{
    // UC 11

// (a) Total wage and total hours
let totalHoursUC11 = dailyDataArray.reduce((sum, obj) => sum + obj.hoursWorked, 0);
let totalWageUC11 = dailyDataArray.reduce((sum, obj) => sum + obj.wageEarned, 0);

console.log("UC11 (a) - Total Hours:", totalHoursUC11);
console.log("UC11 (a) - Total Wage:", totalWageUC11);

// (b) Full working days using forEach
console.log("UC11 (b) - Full Working Days:");
dailyDataArray.forEach(obj => {
    if (obj.hoursWorked === 8)
        console.log("Day:", obj.day);
});

// (c) Part working days using map → string array
let partDaysUC11 = dailyDataArray
    .filter(obj => obj.hoursWorked === 4)
    .map(obj => `Day ${obj.day}`);

console.log("UC11 (c) - Part Working Days:", partDaysUC11);

// (d) No working days using map
let noWorkingDaysUC11 = dailyDataArray
    .filter(obj => obj.hoursWorked === 0)
    .map(obj => obj.day);

console.log("UC11 (d) - No Working Days:", noWorkingDaysUC11);

}

{
    // UC 12

class EmployeePayroll {
    constructor(name, gender, salary, startDate) {
        this.name = name;
        this.gender = gender;
        this.salary = salary;
        this.startDate = startDate;
    }

    toString() {
        return `Name: ${this.name}, Gender: ${this.gender}, Salary: ${this.salary}, Start Date: ${this.startDate}`;
    }
}

let emp1 = new EmployeePayroll("Mark", "M", 30000, new Date());
console.log("UC12 - Employee Payroll:\n" + emp1.toString());

}

{
    // UC 13

function validateName(name) {
    try {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

        if (!nameRegex.test(name)) {
            throw "Invalid Name: Must start with capital & min 3 letters!";
        }

        console.log("Valid Name:", name);
    }
    catch (error) {
        console.log("Error:", error);
    }
}

// Testing
validateName("John");   // valid
validateName("jo");     // invalid
validateName("ab");     // invalid

}