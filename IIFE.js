// immediately invoked function expressions
(function ()
{
    console.log('hello world');
})();
var result = (function ()
{
    return ('hello')
})();
console.log(result);