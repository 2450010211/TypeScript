abstract class Animal {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    //抽象方法只能定义在抽象方法中
    abstract say(): void;
}
