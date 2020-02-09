let s1='hello'
let s2 = `abc ${s1}`
console.log(s2);
let s3 = `abc ${s1} and ${s1}`
console.log(s3);
s2 = `value is ${3+5}`
s3 = `hello
world`
console.log(s2);
console.log(s3);
s2 = `value ${"10" === 10?true:false}`
console.log(s2);
s2 = `value ${"10" === "10"?true:false}`
console.log(s2)