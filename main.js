var game = {
  points: 0,
  clickPower: 1,
  G1: {
    amt: 0,
    pow: 1,
    cost: 10,
  },
}
function clicky() {
  game.points+=game.clickPower;
  document.getElementById("points").textContent = "You have " + Math.round(game.points) + " points.";
};
function G1() {
  if(game.points >= game.G1.cost){
    game.points-=game.G1.cost;
    game.G1.cost*=1.1;
    game.G1.amt++;
  }
};
setInterval(function() {
  game.points+=(G1.amt*G1.pow)/30;
  updt();
}, 1/30);
function updt(){
  document.getElementById("points").textContent = "You have " + Math.round(game.points) + " points.";
  if(Math.round(game.clickPower) != 1){
    document.getElementById("ppc").textContent = "You get " + Math.round(game.clickPower) + " points every click.";
  } else {
    document.getElementById("ppc").textContent = "You get 1 point every click.";
  }
  document.getElementById("g1amt").textContent = "You have " + Math.round(game.G1.amt) + " G1s, each producing " + Math.round(game.G1.pow) + " points/sec.";
  document.getElementById("g1cost").textContent = "Buying one costs " + Math.round(game.G1.cost) + " points.";
};
