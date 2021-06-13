class ScorePanel {

    score = 0;
    level = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;

    constructor(maxLevel: number = 10) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
    }

    //设置一个加分方法
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        if (this.score % 10 === 0) {
            this.levelUp();
        }
    }

    //设置一个加等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}

// const scorePanel = new ScorePanel();
// for (let i = 0; i < 10; i++) {
//     scorePanel.addScore();
// }

export default ScorePanel;
