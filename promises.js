/*console.log('before');
setTimeout(()=>{console.log('Hello')},2000);
console.log('After');

console.log('Before');
console.log(func());
console.log('After');
function func()
{
    setTimeout(()=>{return'Hello'},2000);
}*/

//CallBack
/*console.log('Before');
func((x)=>{console.log(x)});
console.log('After');
function func(callback)
{
    setTimeout(()=>{callback('Hello')},2000);
}*/

//complex callback
/*func1((x)=>{
    func2(x.id,(y)=>{
        func3(y[0],(z)=>{
            console.log(z);
        })
    })
});
function func1(callback)
{
    setTimeout(()=>{callback({id:1,name:'abc'})},2000);
}
function func2(id,callback)
{
    setTimeout(()=>{console.log(id);
    callback([4,5,6])},2000);
}
function func3(n,callback)
{
    setTimeout(()=>{console.log(n);
    callback('Done')},2000);
}*/

//Eliminate complexity of unamed functions in callbacks
function display(z)
{
    console.log(z);
}
function func3(y)
{
    func3(y[0],display);
}
function func2(x)
{
    func2(x.id,func3);
}
function func1(callback)
{
    func2();
}
