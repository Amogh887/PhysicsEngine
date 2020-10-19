const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    createCanvas (400, 400);
    engine = Engine.create();
    world = engine.world;
    var ground_options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, 390, 400, 5, ground_options);
    World.add(world,ground);

    var ball_options = {
        restitution: 0.9
    }
    ball = Bodies.circle(200, 200, 30, ball_options);
    World.add(world,ball);
}

function draw(){
    background ("black");
    Engine.update(engine);
    rectMode(CENTER)
    rect (ground.position.x, ground.position.y, 400, 5);

    ellipseMode(RADIUS);
    ellipse (ball.position.x, ball.position.y, 30);
}