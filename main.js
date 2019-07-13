var game = {
  points: 0,
  clickPower: 1,
  G1: {
    amt: 0,
    pow: 1,
    cost: 10,
  },
}
function commaNumber(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
function clicky() {
  game.points+=game.clickPower;
  document.getElementById("points").textContent = "You have " + commaNumber(Math.round(game.points)) + " points.";
};
function G1() {
  if(game.points >= game.G1.cost){
    game.points-=game.G1.cost;
    game.G1.cost*=1.1;
    game.G1.amt++;
  }
};
setInterval(function() {
  game.points+=(game.G1.amt*game.G1.pow)/30;
  updt();
}, 1000/30);
function updt(){
  document.getElementById("points").textContent = "You have " + commaNumber(Math.round(game.points)) + " points.";
  if(Math.round(game.clickPower) != 1){
    document.getElementById("ppc").textContent = "You get " + commaNumber(Math.round(game.clickPower)) + " points every click.";
  } else {
    document.getElementById("ppc").textContent = "You get 1 point every click.";
  }
  document.getElementById("g1amt").textContent = "You have " + commaNumber(Math.round(game.G1.amt)) + " G1s, each producing " + commaNumber(Math.round(game.G1.pow)) + " points/sec.";
  document.getElementById("g1cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G1.cost)) + " points.";
};
