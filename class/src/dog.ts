class Dog extends Animal{

    color: string;

    constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    }

    say() {
        console.log('汪汪汪~~');
    }
}

const  dog = new Dog('旺财', 4, '白色');
console.log(dog);
dog.say();
