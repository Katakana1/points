var game = {
  points: 10,
  pps: 0,
  clickPower: 1,
  G1: {
    amt: 0,
    pow: 1,
    cost: 10,
  },
  G2: {
    amt: 0,
    pow: 1,
    cost: 200,
  },
  G3: {
    amt: 0,
    pow: 1,
    cost: 4000,
  },
  G4: {
    amt: 0,
    pow: 1,
    cost: 80000,
  },
  upgradeArray: [1337],
  buttonArray: [420],
  strArray: [69],
}
started = true;
function commaNumber(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}
function updtGs() {
  document.getElementById("g1amt").textContent = "You have " + commaNumber(Math.round(game.G1.amt)) + " G1s, each producing " + commaNumber(Math.round(game.G1.pow)) + " points/sec.";
  document.getElementById("g1cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G1.cost)) + " points.";
  document.getElementById("g2amt").textContent = "You have " + commaNumber(Math.round(game.G2.amt)) + " G2s, each producing " + commaNumber(Math.round(game.G2.pow)) + " points/sec.";
  document.getElementById("g2cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G2.cost)) + " points.";
  document.getElementById("g3amt").textContent = "You have " + commaNumber(Math.round(game.G3.amt)) + " G3s, each producing " + commaNumber(Math.round(game.G3.pow)) + " points/sec.";
  document.getElementById("g3cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G3.cost)) + " points.";
  document.getElementById("g4amt").textContent = "You have " + commaNumber(Math.round(game.G4.amt)) + " G4s, each producing " + commaNumber(Math.round(game.G4.pow)) + " points/sec.";
  document.getElementById("g4cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G4.cost)) + " points.";
};
function updtMlt(){
  game.G2.pow = Math.pow(1.03,game.G1.amt);
  game.G3.pow = Math.pow(1.03,(game.G1.amt)+(game.G2.amt));
  game.G4.pow = Math.pow(1.03,(game.G1.amt)+(game.G2.amt)+(game.G3.amt));
};
function G1() {
  if (game.points >= game.G1.cost) {
    game.points -= game.G1.cost;
    game.G1.cost *= 1.1;
    game.G1.amt++;
    updtGs();
    updtMlt();
  }
};
function G2() {
  if (game.points >= game.G2.cost) {
    game.points -= game.G2.cost;
    game.G2.cost *= 1.1;
    game.G2.amt++;
    updtGs();
    updtMlt();
  }
};
function G3() {
  if (game.points >= game.G3.cost) {
    game.points -= game.G3.cost;
    game.G3.cost *= 1.1;
    game.G3.amt++;
    updtGs();
    updtMlt();
  }
};
function G4() {
  if (game.points >= game.G4.cost) {
    game.points -= game.G4.cost;
    game.G4.cost *= 1.1;
    game.G4.amt++;
    updtGs();
    updtMlt();
  }
};
setInterval(function () {
  game.pps = game.G1.amt * game.G1.pow + game.G2.amt * game.G2.pow + game.G3.amt * game.G3.pow + game.G4.amt * game.G4.pow;
  game.points += game.pps / 30;
  if(started == true){
    updtGs();
    started = false;
  }
  updtPts();
}, 1000 / 30);
function updtPts() {
  document.getElementById("points").textContent = "You have " + commaNumber(Math.round(game.points)) + " points, and are getting " + commaNumber(Math.round(game.pps)) + " points every second.";
};
function save(){
	localStorage.cc = btoa(JSON.stringify(game));
}
function load(){
	if(!localStorage.cc) return;
	game = JSON.parse(atob(localStorage.cc));
}
