(function(root){
'use strict';
class FarmGame {
 constructor(){this.day=1;this.energy=100;this.food=0;this.water=3;}
 act(action){
  if(action==='rest'){this.energy=Math.min(100,this.energy+25);this.day++;return;}
  if(action==='collect'){if(this.energy<10)throw new Error('Нужно восстановить энергию');this.energy-=10;this.water++;return;}
  if(action==='grow'){if(this.energy<20||this.water<1)throw new Error('Нужны вода и энергия');this.energy-=20;this.water--;this.food+=2;return;}
  throw new Error('Неизвестное действие');
 }
}
if(typeof module!=='undefined')module.exports={FarmGame};else root.FarmGame=FarmGame;
})(globalThis);
