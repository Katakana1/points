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
}
setInterval(function() {
  game.points+=(G1.amt*G1.pow)/30;
}, 1/30);
