let s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(1);
s.add('false');
s.add({a:1,b:2});
console.log(s);
console.log(s.size);
console.log(s.has(1));
console.log(s.has(2));
let ob={
    key:'value'
}
s.add(ob);
console.log('check ob is present ' + s.has(ob));
ob=null;
console.log(s.has(null));



//weak set = it can constain only objects not any other values
// in this case even if the object is null its reference will still exist
let s2 = new WeakSet();
let obj = {
    key:"value"
}
s2.add(obj);
console.log(s2.has(obj));
obj=null;
console.log(s2.has(obj));
