class Person
{
    constructor(name)
    {
        this.name=name;
    }
    greet(){console.log('hello')}
}
let p = new Person("abc");
p.greet();
console.log(p.name);