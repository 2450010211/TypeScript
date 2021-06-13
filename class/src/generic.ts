/**
 * 自定义函数或者类时，如果遇到类型不明确就可以使用泛型
 * @param a
 */
function fn<T>(a: T): T {
    return a;
}

const number = fn(10);
console.log('泛型：', number);

const h = fn<string>('hello');
console.log('泛型：', h);
