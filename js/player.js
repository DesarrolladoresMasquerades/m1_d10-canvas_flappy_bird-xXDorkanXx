class Player{
    constructor(ctx){
        this.ctx = ctx;
    }

    move(frames){
        console.log("Player move to frame number: ", frames)
    }

    draw(frames){
        console.log("Player draw to frame number: ", frames)
    }
};