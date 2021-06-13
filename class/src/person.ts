class Person {

    //readonly 只读属性，无法修改

    readonly userName: string;
    age: number;
    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    sayHello() {
        console.log('Person sayHello')
    }
}
const person = new Person('张三', 20);
console.log(person);
person.sayHello();
