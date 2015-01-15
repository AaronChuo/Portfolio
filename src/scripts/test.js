var brownianMotion = function (canvasId) {
  
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  var cw = canvas.width;
  var ch = canvas.height;
  var targetX = Math.random() * cw;
  var targetY = Math.random() * ch;
  var speed = Math.random() / 10;
  var alpha = Math.random();
  var scale = Math.random() * 0.8 + 0.2;
  var arrParticles = [];
  
  function play(timestamp) {

    ctx.clearRect(0, 0, cw, ch);
    ctx.restore();

    particleUpdate();
    draw();

    window.requestAnimationFrame(play);

  };
    
  var particleFactory = function () {
    
    var particle = {};

    particle = particleOperation(particle);

    // x += (targetX - x) * speed;
    // y += (targetY - y) * speed;
    // alpha = Math.random();

    arrParticles.push(particle);
    //drawParticle(x, y, speed, alpha, scale);

  };

  var particleOperation = function (particle) {

    particle.speed = Math.random() / 10;
    particle.x = Math.random() * cw * particle.speed;
    particle.y = Math.random() * ch * particle.speed;
    particle.alpha = Math.random();
    particle.scale = Math.random() * 0.8 + 0.2;

    return particle;

  };

  var particleUpdate = function () {

    for(var i = 0; i < arrParticles.length; i++) {
      arrParticles[i] = particleOperation(arrParticles[i]);
    }

  };
    
  var draw = function () {
    
    for(var i = 0; i < arrParticles.length; i++) {
      ctx.beginPath();
      ctx.arc(
        arrParticles[i].x,
        arrParticles[i].y,
        200,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = '#CCC';
      ctx.fill();
      ctx.closePath();
    }

  };

  return {
    init: function () {
      for(var i = 0; i < 10; i++) {
        particleFactory();
      }
      console.log(arrParticles[0]);
      
      play();
    }
  };
  
};

brownianMotion('brownian-motion').init();
