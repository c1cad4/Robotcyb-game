const game=new FarmGame();
function render(){document.getElementById('state').textContent=`День ${game.day} · Энергия ${game.energy} · Вода ${game.water} · Еда ${game.food}`;}
for(const button of document.querySelectorAll('[data-action]'))button.addEventListener('click',()=>{try{game.act(button.dataset.action);document.getElementById('message').textContent='Действие выполнено';}catch(error){document.getElementById('message').textContent=error.message;}render();});render();
