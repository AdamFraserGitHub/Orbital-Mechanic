var canvas = document.getElementById("mainCanvas"),
    ctx = canvas.getContext("2d");

var boddies = simulations[0];

setInterval(loop, 1000/100);


function loop() {
    update();
    render();
}




function update() {
    //calls method to calculate and apply forces due to gravity
    applyForceFromGravity(boddies);

    //cycles through each body and applys acceleration and velocity
    for(var i = 0; i < boddies.length; i++) {
        applyAcceleration(boddies[i]);
        applyVelocity(boddies[i]);
    }
    
}




function render() {
    ctx.clearRect(0,0,1000,1000);
    ctx.fillStyle = "rgb(50,50,50)";
    ctx.rect(0,0,1000,1000);
    ctx.fill();
    for(var i = 0; i < boddies.length; i++) {

        ctx.beginPath();
            ctx.arc(boddies[i].x, boddies[i].y, boddies[i].m * 2, Math.PI * 2, false);
            ctx.fillStyle = boddies[i].color;
            ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
            ctx.font = "12px Arial";
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillText(i, boddies[i].x - 2.5, boddies[i].y + 2.5);
        ctx.closePath();
    }
}