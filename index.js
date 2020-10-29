// Your code here
function createTimeInEvent(obj,stamp){
    let date = stamp.split(" ");
    let hour = stamp.split(" ");
    obj.timeInEvents.push( {
        type : "TimeIn",
        hour: parseInt(hour[1]),
        date: date[0]
    })

    return obj
};


function createTimeOutEvent(obj,stamp){
     let date = stamp.split(" ");
     let hour = stamp.split(" ");
      obj.timeOutEvents.push( {
         type : "TimeOut",
         hour: parseInt(hour[1]),
         date: date[0]      
       })
     return obj
};

function createEmployeeRecords(arr){
    let tmp = [];
     arr.map(x =>{
       tmp.push(createEmployeeRecord(x))
     })
     return tmp;
};