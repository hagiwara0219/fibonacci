'use strict';
function fib(n) {/*フィボナッチ関数を定義*/
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
const length = 40;  /*40回繰り返す*/
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}