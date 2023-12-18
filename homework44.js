"use strict"

var str2 = 'number'+3+3; 
console.log(str2)
// вывод 'number33' так как стринга плюс 3 получится number3 
// и к ней добавиться еще 3

var empty = null;
console.log(null+3)
// вывод 3 так как null это пустота, т.е.0 0+3=3

let empty=null;
console.log(null=='')
// вывод false так как пустой ряд -это false

var result = +'40' + +'2' + "hillel";
console.log(result)
// вывод 42hillel так как + преобразует стрингу 40 и 2 в числа 

let boolean1=true;
let boolean2=false;
console.log(true+false)
//вывод 1 так как true это 1, false это 0, 1+0=1

var result = '4'- 1
console.log(result)
// вывод 3 если есть число то стринга '4' будет преобразована в число

var result = '4px'- 1
console.log(result)
// вывод NaN так как стрингу, если в ней есть буквы и числа будет преобразовано в NaN

var result = '10'-5===6
console.log(result)
// вывод false так как '10' преобразуется в число и 10-5=5 5 меньше 6 значит false

var result = '10'+(5===6);
console.log(result)
// вывод 10false так как значение в скобках будет false, false  плюс стринга получится  10false

var result = 12/'6'; 
console.log(result)
// вывод 2 так как стринга "6" преобразуется в число

var result = 3**(9/3);
console.log(result)
// вывод 27 так как в скобках будет 3, 3 в 3 степени будет 27

var result = '6'+3**0;
console.log(result)
// вывод 61 так как 3 в 0 степени будет 1, стринга "6" преобразуется в число, будет 61

console.log((+null==false)<1)
// вывод false так как +null будет 0, 0=0 это тру, тру это 1, 1 меньше 1 это false

console.log((+null==false)<1**5)
// вывод false  так как +null будет 0, 0=0 это тру, тру это 1, 1 в 5 степени это 1, 1 меньше 1 это false

console.log(!!'false'==!!'true');
// вывод true так как == сравнивает значения 1 и 0

console.log(0||'0'&& 1);
// вывод 1 так как стринга и 1 будет 1, 1 это тру, значит выведется 1

console.log(false && true || true);
// вывод true так как false && true будет false, false || true так как если есть тру, будет тру

console.log(false &&(false||true));
// вывод false так как в скобках будет тру, false && true будет false

console.log(5&&"qwerty");
// вывод qwerty так как превый оперант истинный то возвращается второй qwerty