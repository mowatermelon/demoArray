
  function Fn(num) {
    this.x=num;
  }
  //1、给Fn.prototype起一个别名
  /*var pro=Fn.prototype;
  pro.getX = function(){

  };

  pro.setX = function(){

  };
  pro.removeX = function(){

  };*/


  // 2、我们手动创建一个新的内存给Fn.prototype
  // 1)一定要注意，我们自己创建的堆内存会吧浏览器默认创建的那个给覆盖掉，所以之前在原型上写test方法就不存在了
  // 解决办法：我们在创建之前把原来的保留下来，在创建完成后，再循环原来的所有，一个个添加到新的堆内存当中，这样就避免了把原来的覆盖掉了
  
  Fn.prototype.test = function(){
    console.log('test');
  };
  var pro= Fn.prototype; //在创建新的之前，把原来的保存下来
  Fn.prototype={
    constructor:Fn,
    getX:function(){
      console.log('getX');
    },
    setX:function(){
      console.log('setX');
    },
    //新的创建完成后，我们在把原来的一个个的添加到新的里面
    recovery:function(){
      // this --> Fn.prototype
      for (var key in pro) {
        this[key] = pro[key];
      }
    },
  };
  Fn.prototype.recovery();

  /*//新的创建完成后，我们在把原来的一个个的添加到新的里面
  for (var key in pro) {
    Fn.prototype[key] = pro[key];
  }*/

  //2） 自己创建的对象中是不会默认自带 constructor 的，所以当我们输出f.constructor 的结果是 Object
  //这样的话就修改了constructor默认指向自己类本身的机制，为了防止修改，我们采用这种办法设置公有的属性和方法的时候，千万不要忘记自己手动添加constructor，让其指向当前类本身
  var f=new Fn(100);
  console.log(f);
  // console.log(f.constructor);
  // f.getX();
  // f.setX();
  // f.__proto__.setX();
  // f.test() //error f.test is not a function 如果没有执行recovery 就会把之前的test定义的覆盖就会报错
