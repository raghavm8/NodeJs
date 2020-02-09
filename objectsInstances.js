let obj = new Person("abc");
let obj1 = new Person("xyz");
function Person(name) // this is a constructor
{
    this.name=name;
    this.greet=function(){
        return "hello "+this.name;
    }
}
console.log(obj.greet());
console.log(obj1);