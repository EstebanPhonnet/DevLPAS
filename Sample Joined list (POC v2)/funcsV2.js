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