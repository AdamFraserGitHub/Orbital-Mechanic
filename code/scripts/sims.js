var simulations = [];



// boddies in a "dice" configuration
simulations[0] = [
    {x: 500, y: 500,m: 12,vx: 0,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(255,125,0)"}, 
    {x: 900,y: 100,m: 12,vx: 0,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(0,255,125)"}, 
    {x: 900,y: 900,m: 12,vx: 0,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(0,125,255)"}, 
    {x: 100,y: 900,m: 12,vx: 0,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(255,0,255)"}, 
    {x: 100,y: 100,m: 12,vx: 0,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(0,125,255)"}
]; 



//2 small boddies orbiting much larger boddy
simulations[1] = [
    {x: 500, y: 500,m: 120,vx: 0,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(255,125,0)"},
    {x: 500, y: 50,m: 2,vx: -4.4,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(0,125,255)"}, 
    {x: 500, y: 900,m: 2,vx: 5,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(0,125,255)"}
]; 



//simulation highlighting the importance of mathematical precision in orbital mechanics
simulations[2] = [
    {x: 500, y: 600,m: 15,vx: -2,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(255,125,0)"}, 
    {x: 500,y: 400,m:15,vx: 2,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(0,255,125)"}, 
    {x: 500,y: 500,m:2,vx: 0,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(255,0,100)"}
]; 



//simple binary (planet?) system
simulations[3] = [
    {x: 500, y: 575,m: 15,vx: -2.75,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(255,0,100)"}, 
    {x: 500,y: 425,m:15,vx: 2.75,vy: 0,ax: 0,ay: 0,fx: 0,fy: 0, color: "rgb(0,255,125)"}
]; 