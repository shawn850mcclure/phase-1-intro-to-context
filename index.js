// Your code here

function createEmployeeRecord(testEmployee){
    return{
        firstName:testEmployee [0],
        familyName:testEmployee [1],
        title:testEmployee [2],
        payPerHour:testEmployee[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
}

function createEmployeeRecords(twoRows){
    return twoRows.map(createEmployeeRecord)
}

function createDateStampObj(getType, dateStamp) {
    return {type: getType, date: dateStamp.slice(0,10), hour: parseInt(dateStamp.slice(-4))}
}

function createTimeInEvent(object, dateStamp){
    object.timeInEvents.push(createDateStampObj("TimeIn", dateStamp))
    return object
}
 function createTimeOutEvent(object,dateStamp){
    object.timeOutEvents.push(createDateStampObj("TimeOut", dateStamp))
    return object
 }

 function hoursWorkedOnDate(object, dates){
    let timeIn = object.timeInEvents.find((e) => e.date === dates).hour
    let timeOut = object.timeOutEvents.find((e) => e.date === dates).hour
    return (timeOut - timeIn)/100
 }

 function wagesEarnedOnDate(object, dates){
    let wage = object.payPerHour
    let hoursWorked = hoursWorkedOnDate(object, dates)
    return wage * hoursWorked
 }

 function allWagesFor(object){
    let allWages = object.timeInEvents.map((day) => {return wagesEarnedOnDate(object, day.date)})
    return allWages.reduce((a, b) => a + b)
    
 }

 function calculatePayroll(records){
    let allPay = (records.map((employee) => {return allWagesFor(employee)}))
    return allPay.reduce((a, b) => a + b)
 }