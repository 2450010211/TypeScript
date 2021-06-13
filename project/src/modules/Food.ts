class Food {

    element: HTMLElement;

    constructor() {
        //获取页面的food元素并将值赋给element
        this.element = document.getElementById("food")!;
    }

    //获取食物的x坐标
    get x() {
        return this.element.offsetLeft;
    }

    //获取食物的y坐标
    get y() {
        return this.element.offsetTop;
    }

    //修改食物位置方法
    change() {
        //食物最小位置是0，最大位置是290
        //蛇移动一次就是一格，一格的大小就是10
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

// const food = new Food();
// console.log(food.x);
// console.log(food.y);
// food.change();

export default Food;
