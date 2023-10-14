var c = document.getElementById('canvas')
var ctx = c.getContext('2d')
c.width = 500
c.height = 175  

ctx.fillStyle = 'white'
ctx.font = '20px Inter Bold';
ctx.fillText('Traditional Way',30, 20);

ctx.fillStyle = 'white'
ctx.font = '20px Inter';
ctx.fillText('A',30, 50);

function drawLine(x1,y1,x2,y2,ratio, colorStyle="white") {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    x2 = x1 + ratio * (x2-x1);
    y2 = y1 + ratio * (y2-y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = colorStyle
    ctx.stroke();
    ctx.lineTo(x2-x1, y2- y1)
  }

function animate1(ratio, x1, x2, y) {
    ratio = ratio || 0;
    drawLine(x1,y,x2, y,ratio);
    if(ratio < 1) {
      requestAnimationFrame(function() {
        animate1(ratio + 0.001, x1, x2, y);
      });
    }
    if(ratio >= 1) {
    ctx.fillStyle = 'white'
    ctx.font = '20px Inter';
    ctx.fillText('B',470, 50);
}
  }

    
animate1(0, 50, 460, 45)

ctx.fillStyle = 'white'
ctx.font = '20px Inter Bold';
ctx.fillText('With Seam[less]',30, 90);
  
ctx.fillStyle = 'white'
ctx.font = '20px Inter';
ctx.fillText('A',30, 130)

function animateN(ratio, x1, x2, y) {
    ratio = ratio || 0;
    ctx.strokeStyle = "yellow"
    drawLine(x1,y+10,x2, y+10,ratio);
    drawLine(x1,y+20,x2, y+20,ratio, "lightgreen");
    drawLine(x1,y+30,x2, y+30,ratio, "cyan");
    drawLine(x1,y+40,x2, y+40,ratio, "yellow");
    if(ratio < 1) {
      requestAnimationFrame(function() {
        animateN(ratio + 0.005, x1, x2, y);
      });
    }
    if(ratio >= 1) {
    ctx.fillStyle = 'white'
    ctx.font = '20px Inter';
    ctx.fillText('B',470, 130);
}
  }

animateN(0, 50, 460, 100)
  

 

    


