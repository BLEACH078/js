"use strict"; //treat all js code as a newer version
let a = 99;
let nullvalue = null;
let b = BigInt(9876767)+BigInt(9686766)
let c = 76646533636632334n;// SUFFIX FOR BIGINT
let d = Boolean(0);
let e = 0;
let undefinedvalue;// cannot declare const with undefined value as the concept of const is intializing it with a vlue which cannot be changed
let w = Symbol(" represent uniqueness")
console.log(a,nullvalue,b,c,d,e);
console.log(typeof null);// (object)bug in the ecmascript the typeof tag in memory of object is similar to typeof tag of nullpointer which points to o
console.log(typeof undefined);