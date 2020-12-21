

let g_MassArray = [];
let g_PositionXArray = [];
let g_PositionYArray = [];
let g_VelocityXArray = [];
let g_VelocityYArray = [];


function setup()
        {
            createCanvas(800,600);
        }

        function draw()
        {
            background(96,96,96);

            for(let i= 0; i < g_MassArray.length ; ++i)
            {
                ellipse(g_PositionXA)
            }
        }

        function mousePressed()
        {
            addNewParticle(mouseX , mouseY);
        }

        function mouseDragged()
        {
            addNewParticle(mouseX, mouseY);

        }

        function addNewParticle (positionX, positionY)
        {
            g_MassArray.push(random(0.01,0.5));
            g_PositionXArray.push(positionX);
            g_PositionYArray.push(positionY);
            g_VelocityXArray.push(0);
            g_VelocityYArray.push(0);
        }

        function draw() {
            background(32);
            
            for (var particleA = 0; particleA < mass.length; particleA++) {
                var accelerationX = 0, accelerationY = 0;
                
                for (var particleB = 0; particleB < mass.length; particleB++) {
                    if (particleA != particleB) {
                        var distanceX = positionX[particleB] - positionX[particleA];
                        var distanceY = positionY[particleB] - positionY[particleA];
        
                        var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
                        if (distance < 1) distance = 1;
        
                        var force = (distance - 320) * mass[particleB] / distance;
                        accelerationX += force * distanceX;
                        accelerationY += force * distanceY;
                    }
                }
                
                velocityX[particleA] = velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
                velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
            }
            
            for (var particle = 0; particle < mass.length; particle++) {
                positionX[particle] += velocityX[particle];
                positionY[particle] += velocityY[particle];
                
                ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
            }
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////
        
        function addNewParticle() {
            mass.push(random(0.003, 0.03));
            positionX.push(mouseX);
            positionY.push(mouseY);
            velocityX.push(0);
            velocityY.push(0);
        }
        