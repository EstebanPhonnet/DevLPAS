var all_questions = [{
//Question 11
    question_string: "Retrouver les bons groupes de mots de ces différentes pièces jointes",
    tips:"Consigne : Pour associer ces mots, vous devez cliquez sur un groupe de la liste de gauche et un groupe de la liste de droite, afin de les relier ensemble",
    linkedFile:"",
    Type:"joinedList",
    choices: {
      lefties: ["acte","relevé", "avis", "attestation", "certificat", "bulletin", "livret", "carte", "notification", "déclaration"],
      righties: ["de naissance/de mariage","d’identité bancaire", "d’imposition/non imposition", "de Pôle emploi", "médical", "de salaire", "de famille", "d’identité", "d’attribution/de rejet AAH", "sur l’honneur"]
    }
}];

// An object for a Quiz, which will contain Question objects.
var Quiz = function(quiz_name) {
  // Private fields for an instance of a Quiz object.
  this.quiz_name = quiz_name;
  
  // This one will contain an array of Question objects in the order that the questions will be presented.
  this.questions = [];
}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
Quiz.prototype.add_question = function(question) {
  // Randomly choose where to add question
  var index_to_add_question = Math.floor(Math.random() * this.questions.length);
  this.questions.splice(index_to_add_question, 0, question);
}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
Quiz.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Hide the quiz results modal
  $('#quiz-results').hide();
  
  // Write the name of the quiz
  $('#quiz-name').text(this.quiz_name);
  
  // // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
  
  // // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    $('#prev-question-button').prop('disabled', current_question_index === 0);
    $('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);
    
    // Determine if all questions have been answered
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  }
  
  // // Render the first question
  var current_question_index = 0;
  change_question();
  
  // Add listener for the previous question button
  $('#prev-question-button').click(function() {
    if (current_question_index > 0) {
      current_question_index--;
      change_question();
    }
  });
  
  // Add listener for the next question button
  $('#next-question-button').click(function() {
    //Check Answer Here
    if (self.questions[current_question_index].user_choice_index === self.questions[current_question_index].correct_choice_index){
      if (current_question_index < self.questions.length - 1) {
        current_question_index++;
        removeVideo();
        change_question();
      }
    } else {
       autoPlayVideo();
    }
  });
  
  // Add listener for the submit answers button
  $('#submit-button').click(function() {
    // Determine how many questions the user got right
    var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
        score++;
      }
    }
    
    //Display the score with the appropriate message
    var percentage = score / self.questions.length;
    var message;
    if (percentage === 1) {
      message = 'Parfait !'
      //Display some fireworks !
      createFirework(80,114,7,5,50,100,50,49,false,true);
      setTimeout(function(){ createFirework(88,39,2,4,23,6,54,59,false,true); }, 200);
      setTimeout(function(){ createFirework(79,101,3,4,77,92,68,66,false,true); }, 400);
      setTimeout(function(){ createFirework(80,114,7,5,50,100,50,49,false,true); }, 800);
      setTimeout(function(){ createFirework(88,39,2,4,23,6,54,59,false,true); }, 1000);
      setTimeout(function(){ createFirework(79,101,3,4,77,92,68,66,false,true); }, 1200);
      setTimeout(function(){ createFirework(80,114,7,5,50,100,50,49,false,true); }, 1600);
      setTimeout(function(){ createFirework(88,39,2,4,23,6,54,59,false,true); }, 1800);
      setTimeout(function(){ createFirework(79,101,3,4,77,92,68,66,false,true); }, 2000);
    }

    var containerToUnfill = $('#question');
    if (containerToUnfill.children().length > 0) {
    containerToUnfill.children().each(function() {
      $(this).remove();
    });
  }
    $('#quiz-results-message').text(message);
    $('#quiz-results-score').html('Vous avez obtenu <b>' + score + '/' + self.questions.length + '</b> questions correctes.');
    $('#quiz-results').slideDown();
    $('#quiz button').slideUp();
  });
  
  // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
  question_container.bind('user-select-change', function() {
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  });
}

// // An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, rightie_choices, leftie_choices, tips, linkedFile) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.tips = tips;
  this.linkedFile = linkedFile;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // // Fill in this.choices with the choices
  var number_of_choices = rightie_choices.length;
  for (var i = 0; i < number_of_choices; i++) {
      var lefties_choice_index = Math.floor(Math.random(0, leftie_choices.length));
      var righties_choice_index = Math.floor(Math.random(0, rightie_choices.length));

      this.choices[i] = {"leftie":leftie_choices[lefties_choice_index], "rightie":rightie_choices[righties_choice_index]};

      // Remove the choice from the choice array so that we don't pick it again
      rightie_choices.splice(righties_choice_index, 1);
      leftie_choices.splice(lefties_choice_index, 1);
    }
  }

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
    // For when we're out of scope
    var self = this;

    // Fill out the question label
    var question_string_h2;
    var headContainer = $("#headerData");

    if (headContainer.children('h2').length === 0) {
    question_string_h2 = $('<h2>').attr("style", "float:left;width:80%;text-align:center;").appendTo(headContainer);
    } else {
    question_string_h2 = headContainer.children('h2').first();
    }
    question_string_h2.text(this.question_string);

    //Add tips
    if (this.tips) {
    if (headContainer.children('#tipsContainer').length > 0) {
      $('#tipsContainer').remove();
    };
    var containerTips = $('<label>').attr("id", "tipsContainer").attr("style", "float:left;width:80%;text-align:center;").text(this.tips).appendTo(headContainer); 
    }

    //Add linkedFile or clear them
    var linkedFileContainer = $("#quizlinkedFile")
    if (linkedFileContainer.children('img').length > 0) {
    linkedFileContainer.children('img').each(function() {
      $(this).remove();
    });
    }
    if (this.linkedFile) {
    linkedFileContainer.prepend('<img id="linkedImage" src="./media/'+ this.linkedFile +'" />')
    }

    // Clear any radio buttons and create new ones
    if (container.children('p').length > 0) {
    container.children('p').each(function() {
      $(this).remove();
    });
    }
    setChoicies(container, this, listenToClick)    

}

var setChoicies = function(container, me, cb) {
    for (var i = 0; i < me.choices.length; i++) {
        var rowContainer = $('<div>').attr('class', 'row padding-answer-line-mapping').appendTo(container)
        var leftRowContainer = $('<div>').attr('class', 'col answer-container')
                                        .html(me.choices[i].leftie)
                                        .appendTo(rowContainer);
        $('<div>').attr('class', 'round-pointer-right').appendTo(leftRowContainer);
        $('<div>').attr('class', 'col').appendTo(rowContainer);
        var rightRowContainer = $('<div>').attr('class', 'col answer-container')
                                        .html(me.choices[i].rightie)
                                        .appendTo(rowContainer);
        $('<div>').attr('class', 'round-pointer-left').appendTo(rightRowContainer);
    }
    cb();
}

// "Main method" which will create all the objects and render the Quiz.
$(document).ready(function() {
  // Create an instance of the Quiz object
  var quiz = new Quiz('Quiz Demo');
  
  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < all_questions.length; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.righties, all_questions[i].choices.lefties, all_questions[i].tips, all_questions[i].linkedFile);
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});

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
    console.log(lastSelection);
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
    ctx.globalCompositeOperation='destination-over';

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

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