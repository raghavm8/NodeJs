var x = [1,2,3,4,5];
function odd(number)
{
    return (number&1);
}
var y = x.filter(odd);
console.log(y);