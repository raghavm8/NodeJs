function abc(a,b)
{
    console.log(a+" "+b);
}
abc(10,20,30);
function xyz(...a)
{
    console.log(a);
    var x = a.length;
    console.log(x);
}
xyz(100,200,300,400);