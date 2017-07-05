var lastSelection;

// Add click listener for answer-container
function listenToClick() {
    var rows = document.querySelectorAll('.row'),
        row;
    var cols, col;

    for (row = 0; row < rows.length; row++) {
        cols = rows[row].children;

        for (col = 0; col < cols.length; col++) {
            // Bind information about which answer is this,
            // so we can prevent from connecting two answers on
            // same column.
            cols[col].addEventListener('click', selectAnswer.bind({
                row: row,
                col: col,
                element: cols[col]
            }));
        }
    }
}

// This is fired when a answer-container is clicked.
function selectAnswer(event) {
    if (lastSelection) {
        lastSelection.element.classList.remove('selected');
    }

    if (!lastSelection || lastSelection.col === this.col) {
        lastSelection = this;
        this.element.classList.add('selected');
    } else {
        drawLine(getPoint(this.element), getPoint(lastSelection.element));
        lastSelection = null;
    }
}

function getPoint(answerElement) {
    var roundPointer = answerElement.lastElementChild;

    return {
        y: answerElement.offsetTop + roundPointer.offsetTop + roundPointer.offsetHeight / 2,
        x: answerElement.offsetLeft + roundPointer.offsetLeft + roundPointer.offsetWidth / 2
    };
}

function drawLine(p1, p2) {
    var canvas = document.getElementById("connection-canvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

function resizeCanvas() {
    var canvas = document.getElementById("connection-canvas");
    var ctx = canvas.getContext("2d");

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

listenToClick();
resizeCanvas();

function clock() {
  var now = new Date();
  var ctx = document.getElementById('animationField').getContext('2d');
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';

  // Hour marks
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5!= 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();
 
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = 'black';

  // write Hours
  ctx.save();
  ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();
 
  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI / 30);
  ctx.strokeStyle = '#D40000';
  ctx.fillStyle = '#D40000';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);