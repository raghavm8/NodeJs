console.log('before');
func((x)=>{console.log(x),console.log('after')})
function func(callback)
{
    setTimeout(()=>{callback(1);},2000);
}