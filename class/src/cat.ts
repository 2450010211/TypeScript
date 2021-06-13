class Cat extends Animal{

    say(): void {
        console.log('喵喵喵~~')
    }
}

const cat = new Cat('喵喵', 2);
console.log(cat);
cat.say();
