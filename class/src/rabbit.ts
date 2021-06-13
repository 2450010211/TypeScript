class Rabbit implements InterfaceAnimal{
    age: number;
    name: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say(): void {
        console.log('吱吱吱~~')
    }

}

const rabbit = new Rabbit('小白兔', 4);
console.log(rabbit);
rabbit.say();
