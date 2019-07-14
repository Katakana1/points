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
  G3: {
    amt: 0,
    pow: 450,
    cost: 9000,
  },
  upgradeArray: [1337, 0, 0, 0, 0, 0, 0, 0],
  buttonArray: [420, "<button style = 'font-size:15px' onclick = 'u1()'>Upgrade G1s<br>Costs 400 points<br>x4 multiplier to G1s</button><br>", 
    "<button style = 'font-size:15px' onclick = 'u2()'>Make clicks stronger<br>Costs 600 points<br>x3 multiplier to clicks</button><br>", "",
    "<button style = 'font-size:15px' onclick = 'u4()'>Upgrade G2s<br>Costs 29,000 points<br>x4 multiplier to G2s</button><br>", "", "", ""],
  strArray: [69, "<button style = 'font-size:15px' onclick = 'u1()'>Upgrade G1s<br>Costs 400 points<br>x4 multiplier to G1s</button><br>",
    "<button style = 'font-size:15px' onclick = 'u2()'>Make clicks stronger<br>Costs 600 points<br>x3 multiplier to clicks</button><br>",
    "<button style = 'font-size:15px' onclick = 'u3()'>Upgrade G1s [2]<br>Costs 2,300 points<br>x3 multiplier to G1s</button><br>",
    "<button style = 'font-size:15px' onclick = 'u4()'>Upgrade G2s<br>Costs 29,000 points<br>x3 multiplier to G2s</button><br>",
    "<button style = 'font-size:15px' onclick = 'u5()'>Upgrade G2s [2]<br>Costs 111,111 points<br>x2 multiplier to G2s</button><br>",
    "<button style = 'font-size:15px' onclick = 'u6()'>Upgrade G1s [3]<br>Costs 9,000 points<br>x3 multiplier to G1s</button><br>",
    "<button style = 'font-size:15px' onclick = 'u7()'>Upgrade G1s [4]<br>Costs 66,000 points<br>x3 multiplier to G1s</button><br>"],
}
started = true;
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
function updtGs() {
  document.getElementById("g1amt").textContent = "You have " + commaNumber(Math.round(game.G1.amt)) + " G1s, each producing " + commaNumber(Math.round(game.G1.pow)) + " points/sec.";
  document.getElementById("g1cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G1.cost)) + " points.";
  document.getElementById("g2amt").textContent = "You have " + commaNumber(Math.round(game.G2.amt)) + " G2s, each producing " + commaNumber(Math.round(game.G2.pow)) + " points/sec.";
  document.getElementById("g2cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G2.cost)) + " points.";
  document.getElementById("g3amt").textContent = "You have " + commaNumber(Math.round(game.G3.amt)) + " G3s, each producing " + commaNumber(Math.round(game.G3.pow)) + " points/sec.";
  document.getElementById("g3cost").textContent = "Buying one costs " + commaNumber(Math.round(game.G3.cost)) + " points.";
  document.getElementById("upgrades").innerHTML = game.buttonArray[1] + game.buttonArray[2] + game.buttonArray[3] + game.buttonArray[4] + game.buttonArray[5] + game.buttonArray[6] + game.buttonArray[7];
};
function G1() {
  if (game.points >= game.G1.cost) {
    game.points -= game.G1.cost;
    game.G1.cost *= 1.1;
    game.G1.amt++;
    updtGs();
  }
};
function G2() {
  if (game.points >= game.G2.cost) {
    game.points -= game.G2.cost;
    game.G2.cost *= 1.1;
    game.G2.amt++;
    updtGs();
  }
};
function G3() {
  if (game.points >= game.G3.cost) {
    game.points -= game.G3.cost;
    game.G3.cost *= 1.1;
    game.G3.amt++;
    updtGs();
  }
};
function u1() {
  if (game.points >= 400) {
    game.points -= 400;
    game.G1.pow *= 4;
    game.buttonArray[3] = game.strArray[3];
    game.buttonArray[1] = "";
    game.upgradeArray[1] = 1;
    updtGs();
  }
}
function u2() {
  if (game.points >= 600) {
    game.points -= 600;
    game.clickPower *= 3;
    game.buttonArray[2] = "";
    //  game.buttonArray[3]=game.strArray[3];
    game.upgradeArray[2] = 1;
    updtGs();
  }
}
function u3() {
  if (game.points >= 2300) {
    game.points -= 2300;
    game.G1.pow *= 3;
    game.buttonArray[3] = "";
    game.buttonArray[6]=game.strArray[6];
    game.upgradeArray[3] = 1;
    updtGs();
  }
}
function u4() {
  if (game.points >= 29000) {
    game.points -= 29000;
    game.G2.pow *= 4;
    game.buttonArray[4] = "";
    game.buttonArray[5]=game.strArray[5];
    game.upgradeArray[4] = 1;
    updtGs();
  }
}
function u5() {
  if (game.points >= 111111) {
    game.points -= 111111;
    game.G2.pow *= 3;
    game.buttonArray[5] = "";
//  game.buttonArray[5]=game.strArray[5];
    game.upgradeArray[5] = 1;
    updtGs();
  }
}
function u6() {
  if (game.points >= 9000) {
    game.points -= 9000;
    game.G1.pow *= 3;
    game.buttonArray[6] = "";
    game.buttonArray[7]=game.strArray[7];
    game.upgradeArray[6] = 1;
    updtGs();
  }
}
function u7() {
  if (game.points >= 66000) {
    game.points -= 66000;
    game.G1.pow *= 3;
    game.buttonArray[7] = "";
//  game.buttonArray[7]=game.strArray[7];
    game.upgradeArray[7] = 1;
    updtGs();
  }
}
setInterval(function () {
  game.pps = game.G1.amt * game.G1.pow + game.G2.amt * game.G2.pow + game.G3.amt * game.G3.pow;
  game.points += game.pps / 30;
  if(started == true){
    updtGs();
    started = false;
  }
  updtPts();
}, 1000 / 30);
function updtPts() {
  document.getElementById("points").textContent = "You have " + commaNumber(Math.round(game.points)) + " points, and are getting " + commaNumber(Math.round(game.pps)) + " points every second.";
  if (Math.round(game.clickPower) != 1) {
    document.getElementById("ppc").textContent = "You get " + commaNumber(Math.round(game.clickPower)) + " points every click.";
  } else {
    document.getElementById("ppc").textContent = "You get 1 point every click.";
  }
};
setInterval(function(){
  save();
}, 15000);
function save(){
	localStorage.cc = btoa(JSON.stringify(game));
}
function load(){
	if(!localStorage.cc) return;
	game = JSON.parse(atob(localStorage.cc));
}
