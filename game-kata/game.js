class BowlingGame{
    constructor(){
        this.currentScore = 0;
        this.rolls = [];
    }
    
    roll(pins){
        this.rolls.push(pins)
    }
    
    get score(){
        let score = 0;
        let rollIndex = 0;

        for(let frame = 0; frame < 10; frame++){
            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
            if(this.rolls[rollIndex]===10){
                score += 10 + (this.rolls[rollIndex+1]) + (this.rolls[rollIndex+2]);
                rollIndex++;
                continue;
            }
            else if(frameScore === 10){
                score += 10 + this.rolls[rollIndex + 2];
            }else{
                score += frameScore;
            }

            rollIndex += 2;
        }

        return score;
    }
}

module.exports = BowlingGame;