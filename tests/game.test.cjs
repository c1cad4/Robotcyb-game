const test=require('node:test'),assert=require('node:assert/strict');
const {FarmGame}=require('../game.js');
test('growing spends resources and produces food',()=>{const g=new FarmGame();g.act('grow');assert.equal(g.food,2);assert.equal(g.water,2);assert.equal(g.energy,80);});
test('invalid and unaffordable actions preserve state',()=>{const g=new FarmGame();g.energy=0;const before=JSON.stringify(g);assert.throws(()=>g.act('grow'));assert.throws(()=>g.act('unknown'));assert.equal(JSON.stringify(g),before);});
test('rest caps energy and advances a day',()=>{const g=new FarmGame();g.act('rest');assert.equal(g.energy,100);assert.equal(g.day,2);});
