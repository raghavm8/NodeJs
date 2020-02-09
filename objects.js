function f1()
{
    console.log('hello');
}
//var f1='ragahv';
// first example
let obj = { };
obj.name='name';
obj.age=12;
console.log(obj);
obj.name='xyz';
console.log(obj.name);
//second example
let obj1={
    name:'mno',
    age:10,
    intrest:['gaming','reading']
} // if properties are to be decalred within in the object's name
//console.log(obj1);
obj1.number=123;
console.log(obj1.intrest[0]);
console.log(obj1);
obj1.greet = f1;
obj1.address={street:12, sector:25};
console.log(obj1);
obj1.greet();