var ob3={
    name:'v3',
    year:2000,
    
    }

    for(let key in ob3)
    {
        console.log(key)
    }
    Object.keys(ob3);

// method
 for(let key in ob3)
{
    console.log(ob3[key]);
}
ob3.college = 'abc'
console.log(ob3)

var x = 'name';
ob3[x];