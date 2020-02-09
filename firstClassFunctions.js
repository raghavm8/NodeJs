function fun()
{
    var x=10;
    var y=20;
    return x+y;
}
function b(a,temp)
{
    console.log(a()+" "+temp);
}
b(fun,"world");