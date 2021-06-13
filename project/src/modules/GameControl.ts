import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

//游戏控制器
class GameControl {

    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    //蛇的方向，就是按下键盘的方向
    direction: string = '';
    //判断游戏是否结束
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    //游戏初始化
    init() {
        //绑定移动事件
        //this.keydownHandle.bind(this) 需要重新绑定一个this，不然按下键盘按键无效
        document.addEventListener('keydown', this.keydownHandle.bind(this));
        //调用run方法，使蛇移动
        this.run();
    }

    //创建一个键盘按下的响应函数
    /**
     * ArrowUp
     * ArrowDown
     * ArrowLeft
     * ArrowRight
     * @param event
     */
    keydownHandle(event: KeyboardEvent) {
        // console.log(event.key)
        this.direction = event.key;
    }

    //蛇移动的方法
    run() {
        //根据方向移动蛇的位置
        let x = this.snake.x;
        let y = this.snake.y;

        switch (this.direction) {
            case 'ArrowUp' :
            case 'Up' :
                y -= 10;
                break;
            case 'ArrowDown' :
            case 'Down' :
                y += 10;
                break;
            case 'ArrowLeft' :
            case 'Left' :
                x -= 10;
                break;
            case 'ArrowRight' :
            case 'Right' :
                x += 10;
                break;
        }

        //检查蛇是否吃到了食物
        if(this.checkEat(x, y)) {
            //console.log('吃到了食物')
            //1、改变食物位置
            this.food.change();
            //2、分数增加
            this.scorePanel.addScore();
            //3、蛇要增加一节
            this.snake.addBody();
        }

        try {
            this.snake.x = x;
            this.snake.y = y;
        }catch (e) {
            this.isLive = false;
            alert(e.message + "GAME OVER!")
        }

        //需要开启一个定时任务，不然只会执行一次
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    //检查蛇是否吃到了食物
    checkEat(x: number, y: number) {
        return x === this.food.x && y === this.food.y;
    }
 }

export default GameControl;
