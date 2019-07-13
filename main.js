var game = {
  points: 0,
  pps: 0,
  clickPower: 1,
  G1: {
    amt: 0,
    pow: 1,
    cost: 10,
  },
  G2: {
    amt: 0,
    pow: 30,
    cost: 300,
  },
  upgradeArray: [1337, 0, 0, 0],
  buttonArray: [420, "<upgr type = 'button' onclick = 'u1()'>Upgrade G1s<br>Costs 400 points<br>x4 multiplier to G1s</upgr><br>"
    , "<upgr type = 'upper' onclick = 'u2()'>Make clicks stronger<br>Costs 600 points<br>x3 multiplier to clicks</upgr><br>", ""],
  strArray: [69, "<button type = 'button' onclick = 'u1()'>Upgrade G1s<br>Costs 400 points<br>x4 multiplier to G1s</upgr><br>",
    "<upgr type = 'button' onclick = 'u2()'>Make clicks stronger<br>Costs 600 points<br>x3 multiplier to clicks</upgr><br>",
    "<upgr type = 'button' onclick = 'u3()'>Upgrade G1s [2]<br>Costs 2,300 points<br>x3 multiplier to G1s</upgr><br>"],
}
function commaNumber(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}
function clicky() {
  game.points += game.clickPower;
  document.getElementById("points").textContent = "You have " + commaNumber(Math.round(game.points)) + " points, and are getting " + commaNumber(Math.round(game.pps)) + " points every second.";
};
function G1() {
  if (game.points >= game.G1.cost) {
    game.points -= game.G1.cost;
    game.G1.cost *= 1.1;
    game.G1.amt++;
  }
};
function G2() {
  if (game.points >= game.G2.cost) {
    game.points -= game.G2.cost;
    game.G2.cost *= 1.1;
    game.G2.amt++;
  }
};
function u1() {
  if (game.points >= 400) {
    game.points -= 400;
    game.G1.pow *= 4;
    game.buttonArray[3] = game.strArray[3];
    game.buttonArray[1] = "";
    game.upgradeArray[1] = 1;
  }
}
function u2() {
  if (game.points >= 600) {
    game.points -= 600;
    game.clickPower *= 3;
    game.buttonArray[2] = "";
    //  game.buttonArray[3]=game.strArray[3];
    game.upgradeArray[2] = 1;
  }
}
function u3() {
  if (game.points >= 2300) {
    game.points -= 2300;
    game.G1.pow *= 3;
    game.buttonArray[3] = "";
    //  game.buttonArray[4]=game.strArray[4];
    game.upgradeArray[3] = 1;
  }
}
setInterval(function () {
  game.pps = game.G1.amt * game.G1.pow + game.G2.amt * game.G2.pow;
  game.points += game.pps / 30;
  updt();
}, 1000 / 30);
function updt() {
  document.getElementById("points").textContent = "You have " + commaNumber(Math.round(game.points)) + " points, and are getting " + commaNumber(Math.round(game.pps)) + " points every second.";
  if (Math.round(game.clickPower) != 1) {
    document.getElementById("ppc").textContent = "You get " + commaNumber(Math.round(game.clickPower)) + " points every click.";
  } else {
    document.getElementById("ppc").textContent = "You get 1 point every click.";
  }
  document.getElementById("g1amt").textContent = "You have " + commaNumber(Math.round(game.G1.amt)) + " G1s, each producing " + commaNumber(Math.round(game.G1.pow)) + " points/sec.";
  document.getElementById("g1cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G1.cost)) + " points.";
  document.getElementById("g2amt").textContent = "You have " + commaNumber(Math.round(game.G2.amt)) + " G2s, each producing " + commaNumber(Math.round(game.G2.pow)) + " points/sec.";
  document.getElementById("g2cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G2.cost)) + " points.";
  document.getElementById("upgrades").innerHTML = game.buttonArray[1] + game.buttonArray[2] + game.buttonArray[3];
};
