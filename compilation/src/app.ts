//tsc xxx.ts -w 监控文件变化，自动编译
let a = 10;

// import {HI} from './modules'
// console.log(HI);
function fn(a: number, b: number) {
    return a + b;
}

function fn2(this: Window) {
    console.log(this)
}

let id = document.getElementById("ID");
id?.addEventListener("click", function () {
    console.log('hello')
})
