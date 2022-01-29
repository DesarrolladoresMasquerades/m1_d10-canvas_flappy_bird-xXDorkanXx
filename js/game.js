class Game{
    constructor(ctx, player, background, obstacles){
        this.ctx = ctx;
        this.player = player;
        this.background = background;
        this.obstacles = obstacles;
        this.frames = 0;
        this.score = 0;

        document.addEventListener(
            "keydown",
            (event)=>{
                this.onKeyDown(event.keyCode);
            }
        )
    }

    startGame(){
        this.init();
        this.play();
    }

    init(){
        if(this.frames) this.stop()
        this.frames = 0;
        this.background.init()
        this.obstacles.init()
        this.player.init()
        // this.sound.stop() etc..
    }

    play(){
        this.move();
        this.draw();
        this.checkScore();
        if(this.checkCollision()) this.gameOver();
        if(this.frames !== null){
            this.frames = requestAnimationFrame(this.play.bind(this));
        }

        /*
        this.frames += 1;
        */ 
    }

    stop(){
        cancelAnimationFrame(this.frames);
        this.frames = null;
    }

    onKeyDown(keyCode){
        this.player.flyUp();
    }

    move(){
        this.background.move(this.frames);
        this.obstacles.move(this.frames);
        this.player.move(this.frames);
    }

    checkScore(){
        for(let i = 0; i < this.obstacles.objects.length; i++){
            if(this.player.x === this.obstacles.objects[i].x + this.obstacles.objects[i].width){
                this.score += 0.5;
            }
        }
    }

    checkCollision(){
        let collisions = false;

        if(this.obstacles.objects.some((obstacle)=> this.player.collidesWith(obstacle))) collisions = true;

        if(this.player.exitsCanvas()) collisions = true;

        return collisions;
    }

    draw(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.background.draw(this.frames);
        this.obstacles.draw(this.frames);
        this.player.draw(this.frames);
        this.drawScore();
    }

    drawScore(){
        this.ctx.save();
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 24px sans-serif";
        this.ctx.fillText(`Score: ${this.score} pts`, 20, 40);
        this.ctx.restore();
    }

    gameOver(){
        this.stop();
        this.ctx.save();
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.font = "bold 32px sans-serif";
        this.ctx.fillText(
            "Game Over",
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2
        );
        this.ctx.restore();
    }
};