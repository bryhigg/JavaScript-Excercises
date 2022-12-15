/*
• A Gutter game: All misses:
• -/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0
• All ones
• 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20
• Spare
• 5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16
• Strike
• 10/ 1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14
• Perfect Game
• 10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ = 300 
*/

const BowlingGame = require('./game');

let game;

function testRoll(pins, rolls){
    for(i = 0; i<rolls; i++){
        game.roll(pins);
    }
}

beforeEach(() => {
    game = new BowlingGame()
})

describe("Tests for bowling game to meet test cases above", ()=>{
    it("Should return all 0 for game of all zeros", ()=>{
        testRoll(0,20);
        expect(game.score).toEqual(0);
    });

    it("Should return 20 for a game where all rolls are one", ()=>{
        testRoll(1,20);
        expect(game.score).toEqual(20);
    });

    it("Should pick up if a player scores a spare, and add bonus to first roll of next frame", ()=>{
        game.roll(5);
        game.roll(5);
        game.roll(3);
        testRoll(0,17);
        expect(game.score).toEqual(16);
    });

    it("Should return 14 if a strike is bowled, then two 1's are rolled with strike bonus added followed by all missed rolls", ()=>{
        game.roll(10);
        game.roll(1);
        game.roll(1);
        testRoll(0,17);
        expect(game.score).toEqual(14);
    });

    it("Should return 300 if a strike is bowled in every single frame", ()=>{
        testRoll(10, 20);
        expect(game.score).toEqual(300);
    });
})