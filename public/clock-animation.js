function draw() {
    elements = ['riyadh', 'new-york', 'tokyo']
    function cityClock(element) {
        var canvas = document.getElementById(element)
        var c2d = canvas.getContext('2d')
        c2d.clearRect(0, 0, 300, 300)
        //Define gradients for 3D / shadow effec
        var grad1 = c2d.createLinearGradient(0, 0, 300, 300)
        grad1.addColorStop(0, "#c11df2")
        grad1.addColorStop(1, "#5b1f6e")
        var grad2 = c2d.createLinearGradient(0, 0, 300, 300)
        grad2.addColorStop(0, "#740296")
        grad2.addColorStop(1, "#52006b")
        c2d.font = "Bold 20px Arial"
        c2d.textBaseline = "middle"
        c2d.textAlign = "center"
        c2d.lineWidth = 1
        c2d.save()
        //Outer beze
        c2d.strokeStyle = grad1
        c2d.lineWidth = 10
        c2d.beginPath()
        c2d.arc(150, 150, 138, 0, Math.PI * 2, true)
        c2d.shadowOffsetX = 4
        c2d.shadowOffsetY = 4
        c2d.shadowColor = "rgba(0,0,0,0.6)"
        c2d.shadowBlur = 6
        c2d.stroke()
        //Inner beze
        c2d.restore()
        c2d.strokeStyle = grad2
        c2d.lineWidth = 10
        c2d.beginPath()
        c2d.fillStyle = "white"
        c2d.arc(150, 150, 129, 0, Math.PI * 2, true)
        c2d.stroke()
        c2d.strokeStyle = "#222"
        c2d.save()
        c2d.translate(150, 150)
        //Markings/Numeral
        for (i = 1; i <= 60; i++) {
            ang = Math.PI / 30 * i;
            sang = Math.sin(ang);
            cang = Math.cos(ang);
            //If modulus of divide by 5 is zero then draw an hour marker/numeral
            if (i % 5 == 0) {
                c2d.lineWidth = 8;
                sx = sang * 95;
                sy = cang * -95;
                ex = sang * 120;
                ey = cang * -120;
                nx = sang * 80;
                ny = cang * -80;
                c2d.fillText(i / 5, nx, ny);
                //Else this is a minute marker
            } else {
                c2d.lineWidth = 2;
                sx = sang * 110;
                sy = cang * 110;
                ex = sang * 120;
                ey = cang * 120;
            }
            c2d.beginPath();
            c2d.moveTo(sx, sy);
            c2d.lineTo(ex, ey);
            c2d.stroke();
        }
        var ampm = "AM"
        const now = new Date()
        var hrs
        if (element == 'riyadh') {
            hrs = now.getHours()
        }
        else if (element == 'new-york') {
            hrs = now.getHours() - 8

        }
        else if (element == 'tokyo') {
            hrs = now.getHours() + 6
        }
        var min = now.getMinutes()
        var sec = now.getSeconds()

        c2d.strokeStyle = "white"

        //Draw AM/PM indicator
        if (hrs >= 12) ampm = "PM"
        c2d.lineWidth = 1
        c2d.strokeRect(21, -14, 44, 27)
        c2d.fillText(ampm, 43, 0)
        c2d.lineWidth = 6
        c2d.save()
        //Draw clock pointers but this time rotate the canvas rather tha
        //calculate x/y start/end positions
        //Draw hour hand
        c2d.rotate(Math.PI / 6 * (hrs + (min / 60) + (sec / 3600)))
        c2d.beginPath()
        c2d.moveTo(0, 10)
        c2d.lineTo(0, -60)
        c2d.stroke()
        c2d.restore()
        c2d.save()
        //Draw minute hand
        c2d.rotate(Math.PI / 30 * (min + (sec / 60)))
        c2d.beginPath()
        c2d.moveTo(0, 20)
        c2d.lineTo(0, -110)
        c2d.stroke()
        c2d.restore()
        c2d.save()
        //Draw second hand
        c2d.rotate(Math.PI / 30 * sec)
        c2d.strokeStyle = "black"
        c2d.beginPath()
        c2d.moveTo(0, 20)
        c2d.lineTo(0, -110)
        c2d.stroke()
        c2d.restore()
        //Additional restore to go back to state before translat
        //Alternative would be to simply reverse the original translat
        c2d.restore()
        setTimeout(draw, 1000)
    }
    cityClock('riyadh')
    cityClock('new-york')
    cityClock('tokyo')
}

draw()
