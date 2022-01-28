class Obstacle{
    constructor(ctx){
        this.ctx = ctx;
    }

    move(frames){
        console.log("Obstacles move to frame number: ", frames)
    }

    draw(frames){
        console.log("Obstacles draw to frame number: ", frames)
    }
};