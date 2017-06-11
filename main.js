function toNum() {
  var temp =[];
  for (i=0;i<arr.length;i++){
    if (!isNaN(arr[i])){
      temp.push(arr[i])
    } else {
      break;
    }
  }
  return temp.join("")
};
// array to hold calulator input
var arr = [];

// turns all number buttons to js elements
var number = document.getElementsByClassName('number')
for (var i=0;i<number.length;i++){
  number[i].onclick = function(){
    console.log(this.innerText);
    arr.push(this.innerText);
  };
}
// turns all operator buttons to js elements
var operator = document.getElementsByClassName('operator')
for (var i=0;i<operator.length;i++){
  operator[i].onclick = function(){
    console.log(this.innerText);
    arr.push(this.innerText);
  };
}
// Code for equals
var equals = document.getElementById('btnEqu');
var display = document.getElementById('display');
equals.onclick = function(){
  console.log(toNum());
  display.innerText = toNum();
}
