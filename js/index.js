/*
window.onload = function() {
  document.getElementById("start-button").onclick = ()=> {
    startGame();
  };

  function startGame() {

  }

};
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const player = new Player(ctx);
const background = new Background(ctx);
const obstacles = new Obstacles(ctx);

const game = new Game(ctx, player, background, obstacles);

const startButton = document.getElementById("start-button")
startButton.onclick = ()=> {
  startButton.remove();
  game.startGame();
};