function f1(name){
    var x=20;
    this.name=name;
    this.dosomething=function(){
        console.log('do something');
      return 'do something';
    }
    console.log(this);
}
var ob1 = new f1('v1');
var ob2 = new f1('v2');
console.log(ob1.dosomething());