export const learnNaN = ()=>{
    console.log(isNaN("adhdui16782djjd"))//true
    console.log(Number("1,6782"))//NaN
}

export const learnReduce = ()=>{
    let a = new Array("6")
    //learn check data type
    console.log(Object.prototype.toString.call(a))
    
    // learn Array reduce
    console.log([0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => { return accumulator + currentValue; },10 ))
    
}

export const learnCurryBak = ()=>{
    //learn curry
    function curry(fn) {
        var args = Array.prototype.slice.call(arguments,1);
        console.info(args);//one step
        return function( ){
            var innexArgs = Array.prototype.slice.call(arguments);
            console.info(innexArgs);//two step
            var finalArgs = args.concat(innexArgs);
            console.info(finalArgs);//three step
            
            return fn.apply(null , finalArgs);
        };
    } 
    function add(num1,num2,...num){
        let res = 0;
        console.log("begin",num1,num2,num);//four step
        res = num1+num2;
        for(let item in num){
            console.log(item);
            res += item;
        }
        return  res;
    }
  let curriedAdd = curry(add,5,12);
  console.log(curriedAdd());//17

  let curriedAddMore = curry(add,5,12);
  console.log(curriedAddMore(10,50,63,34,15));//189
}

export const learnCurry = ()=>{
    //learn curry
    // curry 
    // It is only passed to part of the function parameter to call it, 
    // so that it returns a function to process the remaining parameters.
    function curry(fn) {
        var args = Array.prototype.slice.call(arguments,1);
        return function( ){
            var innexArgs = Array.prototype.slice.call(arguments);
            var finalArgs = args.concat(innexArgs);
            return fn.apply(null , finalArgs);
        };
    } 
    function add(num1,num2,...num){
        if(!num){
            num=[];
        }
        num = num.concat(num1,num2);      
        let res = num.reduce(function(pre, current) {
           return pre + current;
        });
        return  res;
    }
  let curriedAdd = curry(add,5,12);
  console.log(curriedAdd());//17

  let curriedAddParams = curry(add,5,12);
  console.log(curriedAddParams(10,50,63,34,15));//189

  let curriedAddMore = curry(add,5,12,10,50,63,34,15);
  console.log(curriedAddMore());//189
}
