 //symbol is not possible to print and it is not posiible to view the value of symbol
//it is just used for debug purposes
// every symbol has a new unique value

/*let s1 = Symbol('abc');
let s2 = Symbol('xyz');
let s3 = Symbol('abc');
console.log(s1==s2);
console.log(s1==s3);
console.log(typeof(s1));
console.log(s1);
console.log(s2);*/


/*let s4 = Symbol();
let obj = {
    name:'abc',
    [s4]:12
}
console.log(obj);
console.log(s4);
*/


/*
var s1 = Symbol.for('age');
var s2 = Symbol.for('age');
console.log(s1==s2)     // will return true because it is shared symbol made by 'for'
let ob={
    name:'abc'
}
function makeAge(ob)
{
    var s3=Symbol.for('age');  // declared within the function, but shared with s1 and s2
    ob[s3]=27;
    console.log(ob[s2])
}
makeAge(ob);
console.log(ob[s2]);
*/



// built in symbols
/*
console.log(Symbol.iterator);
let arr=[1,2,3,4]
console.log(typeof(arr[Symbol.iterator])) // function
let it=arr[Symbol.iterator](); // return iterator  to an array
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
*/


// construct a new iterator

let obj={
    ar:[1,2,3,4],
    [Symbol.iterator]:function(){
        let ar = this.ar;
        let i=0;
        return {
            next:function(){
                let value=ar[i];
                i++;
                return {
                    done:i>ar.length?true:false,
                    value:value
                }
            }
        }
    }
}
let it = obj[Symbol.iterator]();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
// print value with for loop()
for(let it2 of obj)
{
    console.log(it2);
}