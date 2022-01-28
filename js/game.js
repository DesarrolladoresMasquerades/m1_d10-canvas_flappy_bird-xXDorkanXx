class Game{
    constructor(ctx, player, background, obstacles){
        this.ctx = ctx;
        this.player = player;
        this.background = background;
        this.obstacles = obstacles;
        this.frames = null;

    }

    startGame(){
        this.init();
        this.play();
    }

    init(){
        this.frames = 0;
        // this.sound.stop() etc..
        // background.init();
    }

    play(){
        this.frames += 1;
        this.move();
        this.checkCollision();
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        this.draw();
        requestAnimationFrame(this.play.bind(this));
    }

    move(){
        this.background.move(this.frames);
        this.obstacles.move(this.frames);
        this.player.move(this.frames);
    }

    checkCollision(){
        let collisions = false;

        if(this.obstacles.objects.some((obstacle)=> this.player.collidesWith(obstacle))) collisions = true;

        if(this.player.exitsCanvas()) collisions = true;

        return collisions;
    }

    draw(){
        this.background.draw(this.frames);
        this.obstacles.draw(this.frames);
        this.player.draw(this.frames);
    }
};