let dates = new Date();
console.log(dates.toString());
console.log(dates.toISOString());
console.log(dates.toDateString());
console.log(dates.toLocaleString());

//Date is a object.


let mydate = new Date(2024,6,25)
console.log(mydate.toString());

let timeStamp = Date.now()
console.log(mydate.getTime()/1000);