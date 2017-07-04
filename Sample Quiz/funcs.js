// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [{
// Question 1
    question_string: "Qu’est ce que la retraite par répartition? ",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    choices: {
        correct: "les retraités sont payés par les cotisations prélevées sur le salaire des personnes qui travaillent ",
        wrong: ["les retraités partagent leurs économies ensemble ",
         "les retraités partagent leur pension de retraite avec les demandeurs d’emploi "]
  }
}, {
// Question 2
    question_string: "Comment est calculée une retraite à taux plein? ",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    choices: {
        correct: "sur la base de 50 % du salaire annuel moyen ",
        wrong: ["sur la base de 45% du salaire annuel moyen ",
         "sur la base de 80 % du salaire annuel moyen "]
  }
}, {
//Question 3
    question_string: "La pension de retraite comprend:",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",    
    choices: {
        correct: "la retraite de base + la retraite complémentaire",
        wrong: ["la retraite de base + l’AAH",
         "la retraite de base + les économies personnelles"]
  }
}, {
//Question 4
    question_string: "Je suis reconnu(e) « travailleur Handicapé », je n’ai pas cotisé suffisamment, je peux partir à la retraite à taux plein à l’âge légal ?",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    choices: {
        correct: "Vrai",
        wrong: ["Faux"]
  }
}, {
//Question 5
    question_string: "Je suis né(e) en 1953 ? A quel âge, ai-je le droit de partir à la retraite ?",
    tips:"Consigne : observez bien le tableau ci-contre puis cliquez sur la bonne réponse",
    linkedFile:"HelperTabs.png",
    choices: {
        correct: "61 ans",
        wrong: ["62 ans","60 ans","66 ans",]
  }
}, {
//Question 6
    question_string: "Je suis né(e) en 1953 ? A quel âge, je peux partir à la retraite à taux plein ?",
    tips:"Consigne : observez bien le tableau ci-contre puis cliquez sur la bonne réponse",
    linkedFile:"HelperTabs.png",
    choices: {
        correct: "66 ans",
        wrong: ["62 ans","60 ans","61 ans",]
  }
}, {
//Question 7
    question_string: "Je suis né(e) en 1953 ? Combien de trimestres dois-je avoir cotisé pour pouvoir partir en retraite à taux plein ?",
    tips:"Consigne : observez bien le tableau ci-contre puis cliquez sur la bonne réponse",
    linkedFile:"HelperTabs2.png",
    choices: {
        correct: "165",
        wrong: ["162","166"]
  }
}, {
//Question 8
    question_string: "Jusqu’à quel âge peut-on travailler?",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    choices: {
        correct: "70 ans",
        wrong: ["65 ans","62 ans"]
  }
}, {
//Question 9
    question_string: "Combien de trimestres (il y a) dans une année de travail ?",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    choices: {
        correct: "4 trimestres",
        wrong: ["3 trimestres","6 trimestres"]
  }
}, {
//Question 10
    question_string: "Lequel de ces régimes n’est pas un régime de retraite ?",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    choices: {
        correct: "le régime alimentaire",
        wrong: ["le régime agricole","le régime général"]
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
  
  // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
  
  // Helper function for changing the question and updating the buttons
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
  
  // Render the first question
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

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices, tips, linkedFile) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.tips = tips;
  this.linkedFile = linkedFile;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // Random assign the correct choice an index
  this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
  
  // Fill in this.choices with the choices
  var number_of_choices = wrong_choices.length + 1;
  for (var i = 0; i < number_of_choices; i++) {
    if (i === this.correct_choice_index) {
      this.choices[i] = correct_choice;
    } else {
      // Randomly pick a wrong choice to put in this index
      var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      this.choices[i] = wrong_choices[wrong_choice_index];
      
      // Remove the wrong choice from the wrong choice array so that we don't pick it again
      wrong_choices.splice(wrong_choice_index, 1);
    }
  }
}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Fill out the question label
  var question_string_h2;
  if (container.children('h2').length === 0) {
    question_string_h2 = $('<h2>').appendTo(container);
  } else {
    question_string_h2 = container.children('h2').first();
  }
  question_string_h2.text(this.question_string);

  //Add tips
  if (this.tips) {
    if (container.children('#tipsContainer').length > 0) {
      $('#tipsContainer').remove();
    };
    var containerTips = $('<label>').attr("id", "tipsContainer").text(this.tips).appendTo(container); 
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

  for (var i = 0; i < this.choices.length; i++) {
    var containerTmp = $('<p>').appendTo(container)

    // Create the radio button
    var choice_radio_button = $('<input>')
      .attr('id', 'choices-' + i)
      .attr('type', 'radio')
      .attr('name', 'choices')
      .attr('value', 'choices-' + i)
      .attr('checked', i === this.user_choice_index)
      .appendTo(containerTmp);
    
    // Create the label
    var choice_label = $('<label>')
      .text(this.choices[i])
      .attr('for', 'choices-' + i)
      .appendTo(containerTmp);
  }
  
  // Add a listener for the radio button to change which one the user has clicked on
  $('input[name=choices]').change(function(index) {
    var selected_radio_button_value = $('input[name=choices]:checked').val();
    
    // Change the user choice index
    self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
    
    // Trigger a user-select-change
    container.trigger('user-select-change');
  });
}

// "Main method" which will create all the objects and render the Quiz.
$(document).ready(function() {
  // Create an instance of the Quiz object
  var quiz = new Quiz('Quiz Demo');
  
  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < all_questions.length; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong, all_questions[i].tips, all_questions[i].linkedFile);
    
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});


function autoPlayVideo(){
  "use strict";
  $("#videoContainer").html('<iframe id="tipsVideo" width="320" height="240" src="http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}

function removeVideo(){
  $("#tipsVideo").remove();
}

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
