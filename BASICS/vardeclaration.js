const accountid = 98775545566 //cant change 
let accountName = "akshita"
var accountEmail ="akshita56@gmail.com"// introduce bugs,can ne redeclared and updated,lower value get gigher priority
accountcity = "jaipur"
console.table([accountid,accountName,accountEmail,accountcity])

//let can be updated but cannot be redeclared
{
    let accountName= "akshita"
    accountName ="ykw"//updated
  
    console.log(accountName)
    console.log(accountName)

}