var x = [1,2,3,4,5];
function add(number)
{
    return number++;
}
var y = x.map(add);
console.log(y);