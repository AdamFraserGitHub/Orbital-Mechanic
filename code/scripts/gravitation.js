function applyVelocity(body) {
    //changes each boddies x and y co-ordinates according to its velocity
    body.x += body.vx;
    body.y += body.vy;
}




function applyAcceleration(body) {
    //calculates acceleration based on netwons 2nd law F=ma
    body.ax = body.fx / body.m;
    body.ay = body.fy / body.m;

    //applies acceleration to a boddies velocity
    body.vx += body.ax;
    body.vy += body.ay;
}




function applyForceFromGravity(boddies) {
    //sets the force vectors of each body to 0 so that the previous cycle doesn't interfere
    for(var i = 0; i < boddies.length; i++) {
        boddies[i].fx = 0;
        boddies[i].fy = 0;
    }


    // itterates through every element in boddies array then finds applys the appropriate force vectors to each boddies
    var startIndex = 1;
    var gravitationalConstant = 100;
    var quadrant, thetaFromQuadLine, dX, dY, dMag, F, fX, fY;
    for(var i = 0; i < boddies.length; i++){
        for(var j = startIndex; j < boddies.length; j++) {
                //calculates the linear (vector) distance between two boddies by applying pythagoras to the difference 
                //in their x and y componants
                dX = boddies[j].x - boddies[i].x;
                dY = boddies[j].y - boddies[i].y;
                dMag = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
                

                //finds out which quadrant (google CAST diagram if you dont know what that means) the seccond object
                //is in compared to the first
                     if(boddies[j].x > boddies[i].x && boddies[j].y <= boddies[i].y) { quadrant = 1; } 
                else if(boddies[j].x >= boddies[i].x && boddies[j].y > boddies[i].y) { quadrant = 2; } 
                else if(boddies[j].x < boddies[i].x && boddies[j].y >= boddies[i].y) { quadrant = 3; } 
                else if(boddies[j].x <= boddies[i].x && boddies[j].y < boddies[i].y) { quadrant = 4; }


                //calculates the angle between the line between the two boddies as measured from their quadrant line
                thetaFromQuadLine = (Math.atan(Math.abs(dY)/Math.abs(dX)));
                if(isNaN(thetaFromQuadLine)) {
                    thetaFromQuadLine = 0;
                }


                //calculates force based on Sir Isaac Newtons law of universial gravitation (F=(G m_1 m_2)/r^2)
                F = (gravitationalConstant * boddies[i].m * boddies[j].m) / Math.pow(dMag,2);
                //splits force vector into its componants (x and y) so that they can be applied to the boddies
                fX = Math.cos(thetaFromQuadLine) * F;
                fY = Math.sin(thetaFromQuadLine) * F;
                
                //switch structure alters what direction each componant of the force vector goes depending on 
                //the quadrant and adds the vector componants to end up with a final overall vector
                switch(quadrant) {
                    case 1:
                        boddies[i].fx += fX;
                        boddies[i].fy += -fY;
        
                        boddies[j].fx += -fX;
                        boddies[j].fy += fY;
                        break;
                    case 2:
                        boddies[i].fx += fX;
                        boddies[i].fy += fY;
        
                        boddies[j].fx += -fX;
                        boddies[j].fy += -fY;
                        break;
                    case 3:
                        boddies[i].fx += -fX;
                        boddies[i].fy += fY;
        
                        boddies[j].fx += fX;
                        boddies[j].fy += -fY;
                        break;
                    case 4:
                        boddies[i].fx += -fX;
                        boddies[i].fy += -fY;
        
                        boddies[j].fx += fX;
                        boddies[j].fy += fY;
                }
        }
        startIndex++;
    }
}