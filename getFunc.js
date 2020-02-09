function getUserID(name,callback)
{
  return new Promise((resolve,reject)=>setTimeout(resolve(20),2000));
}
function getBalance(id,callback)
{
    setTimeout(()=>{
        return new Promise((resolve,reject)=>{
            resolve(2000);
        });
    },2000)
}
function showBalance(balance)
{
    console.log(balance)
}
var name='abc';
