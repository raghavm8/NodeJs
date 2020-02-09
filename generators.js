function *abc() // it itself return an iterator
{
    yield 1;   // it generates the value , in this case the value will be one
    yield 2;
    yield 3;
     // to generate the values automatically
     for(let i=4;i<=7;i++)
     {
         yield i;
     }
}
let obj={
    [Symbol.iterator]:abc
}
for(let elem of obj)
{
    console.log(elem);
}