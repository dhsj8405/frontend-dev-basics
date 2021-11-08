/**
 * Array 확장(prototype 기반의 확장) : List 메소드 추가
 * this를 바꾸는방법 3가지 :splice활용 ,call,apply
 */

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i = 0 ; i< value.length; i ++){
        //     this.splice(index++, 0, value[i]);
        // }

        // var _this = this;       //문법상 범위는 위의 if문이지만 자신을 사용하는 함수안의 범위로 변경됨
        // value.forEach(function(e){  //value를 e로받음
        //     //함수안에서 this는 배열이아님 그래서 closure 사용
        //     _this.splice(index++, 0, e);
        // });
        
        value.forEach(function(e){  //value를 e로받음
            this.splice(index++, 0, e);
        }.bind(this));  //함수를호출할때 부른 this이므로 배열


    }else{
        this.splice(index, 0, value);
    }
}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// List로 사용하기
var a = [1, 2, 4];

console.log(a);
a.insert(2, 3);
console.log(a);

a. remove(3);
console.log(a);

a.insert(2, ['a','b','c']); // 기대하는것 :[1, 2, 'a', 'b', 'c', 3]
console.log(a);             // 결과 : [1, 2, ['a','b','c'], 3]


//삭제하심
// var f = function(param){
//     console.log(this.name + ":" + param);
// }
// //f();
// var o = {name: "kickscar"};
// f.call(o, "kickscar@gmail.com");
// f.apply(o);     //파라미터 못 넣음