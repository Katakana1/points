var game = {
  points: 0,
  clickPower: 1,
}
function click() {
  game.points+=game.clickPower;
  document.getElementById("points").textContent = "You have " + game.points + " points.";
};
