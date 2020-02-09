class person
{
    constructor(name)
    {
        this.name=name;
    }
    greet(){console.log('hello')}
}
let p = new person("abc");
//p.greet();
//console.log(p);
class student extends person{
    constructor(name,grade)
    {
        super(name);
        this.grade = grade;
    }
    getGrade()
    {
        return this.grade;
    }
}
let s = new student('abc',123);
console.log(s.name + " " + s.grade);
console.log(s);