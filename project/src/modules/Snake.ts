class Snake {

    //蛇头
    head: HTMLElement;
    //蛇的身体(包括蛇头)
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div");
    }

    //获取蛇头x坐标
    get x() {
        return this.head.offsetLeft;
    }

    //获取蛇头y坐标
    get y() {
        return this.head.offsetTop;
    }

    //设置蛇头x坐标
    set x(value) {
        //如果新值和旧值相同，则直接返回不再修改
        if(this.x === value) {
            return;
        }

        //判断蛇是否撞墙
        if(value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }

        //修改x坐标时，蛇在左右移动，蛇在向左移动的时候，不能向右移动，反之亦然
        //怎么判断有没有掉头，蛇身间距
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log('水平方向发生掉头');
            if(value > this.x) {
                //发生了掉头，向右走,应该使蛇继续向左走
                value = this.x - 10;
            }else {
                value = this.x + 10;
            }
        }

        //移动身体
        this.moveBody();

        this.head.style.left = value + 'px';

        //检查蛇头有没有撞到身体
        this.checkHeadBody();
    }

    //设置蛇头y坐标
    set y(value) {

        if(this.y === value) {
            return;
        }

        //判断蛇是否撞墙
        if(value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }

        //修改x坐标时，蛇在上下移动，蛇在向上移动的时候，不能向下移动，反之亦然
        //怎么判断有没有掉头，蛇身间距
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // console.log('垂直方向发生掉头');
            if(value > this.y) {
                //发生了掉头，向下走,应该使蛇继续向上走
                value = this.y - 10;
            }else {
                value = this.y + 10;
            }
        }

        //移动身体
        this.moveBody();

        this.head.style.top = value + 'px';

        //检查蛇头有没有撞到身体
        this.checkHeadBody();
    }

    //添加身体
    addBody() {
        //向element中新增一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    //将蛇的身体连接起来
    moveBody() {
        //将后边的身体设置成前边身体的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取前边身体的位置
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }

    //检查身体和蛇头有没有相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let body = this.bodies[i] as HTMLElement;
            if(this.x === body.offsetLeft && this.y === body.offsetTop) {
                //蛇头撞到了身体
                throw new Error("蛇头撞到了身体");
            }
        }
    }
}

export default Snake;
