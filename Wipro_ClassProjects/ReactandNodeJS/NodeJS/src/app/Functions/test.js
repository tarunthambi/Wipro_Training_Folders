"use strict";
let num = 1;
let func = () => {
  let x = 1;
  while (x <= 5) {
    num = 100;
    console.log(x + " ");
    x++;
  }  
  console.log(num);
  console.log(x);
};
func();
