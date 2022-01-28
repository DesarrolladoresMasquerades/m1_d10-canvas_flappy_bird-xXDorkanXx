class Background{
    constructor(ctx){
        this.ctx = ctx;
    }

    move(frames){
        console.log("Backgrounde move to frame number: ", frames)
    }

    draw(frames){
        console.log("Backgrounde draw to frame number: ", frames)
    }
};