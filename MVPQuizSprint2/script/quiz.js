// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [
  {
    // Question 1
    question_string: "Qu’est ce que la retraite par répartition? ",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    successMedia:"./media/Question1.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "les retraités sont payés par les cotisations prélevées sur le salaire des personnes qui travaillent ",
        wrong: ["les retraités partagent leurs économies ensemble ",
         "les retraités partagent leur pension de retraite avec les demandeurs d’emploi "]
    }
  },{
  // Question 2
    question_string: "Comment est calculée une retraite à taux plein? ",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    successMedia:"./media/Question2.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "sur la base de 50 % du salaire annuel moyen ",
        wrong: ["sur la base de 45% du salaire annuel moyen ",
         "sur la base de 80 % du salaire annuel moyen "]
    }
  }
  , {
    //Question 3
    question_string: "La pension de retraite comprend:",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    successMedia:"./media/Question3.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "la retraite de base + la retraite complémentaire",
        wrong: ["la retraite de base + l’AAH",
         "la retraite de base + les économies personnelles"]
   }
  }
  ,{
    //Question 4
    question_string: "Je suis reconnu(e) « travailleur Handicapé », je n’ai pas cotisé suffisamment, je peux partir à la retraite à taux plein à l’âge légal ?",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    successMedia:"./media/Question4.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "Vrai",
        wrong: ["Faux"]
   }
  }, {
    //Question 5
    question_string: "Je suis né(e) en 1953 ? A quel âge, ai-je le droit de partir à la retraite ?",
    tips:"Consigne : observez bien le tableau ci-contre puis cliquez sur la bonne réponse",
    linkedFile:"HelperTabs.png",
    successMedia:"./media/Question5.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "61 ans",
        wrong: ["62 ans","60 ans","66 ans",]
    }
  }, {
    //Question 6
    question_string: "Je suis né(e) en 1953 ? A quel âge, je peux partir à la retraite à taux plein ?",
    tips:"Consigne : observez bien le tableau ci-contre puis cliquez sur la bonne réponse",
    linkedFile:"HelperTabs.png",
    successMedia:"./media/Question6.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "66 ans",
        wrong: ["62 ans","60 ans","61 ans",]
   }
  }, {
    //Question 7
    question_string: "Je suis né(e) en 1953 ? Combien de trimestres dois-je avoir cotisé pour pouvoir partir en retraite à taux plein ?",
    tips:"Consigne : observez bien le tableau ci-contre puis cliquez sur la bonne réponse",
    linkedFile:"HelperTabs2.png",
    successMedia:"./media/Question7.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "165",
        wrong: ["162","166"]
    }
  }, {
    //Question 8
    question_string: "Jusqu’à quel âge peut-on travailler?",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    successMedia:"./media/Question8.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "70 ans",
        wrong: ["65 ans","62 ans"]
    }
  }, {
    //Question 9
    question_string: "Combien de trimestres (il y a) dans une année de travail ?",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    successMedia:"./media/Question9.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "4 trimestres",
        wrong: ["3 trimestres","6 trimestres"]
    }
  }, {
    //Question 10
    question_string: "Lequel de ces régimes n’est pas un régime de retraite ?",
    tips:"Consigne : cliquez sur la bonne réponse",
    linkedFile:"",
    successMedia:"./media/Question10.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"checkedList",
    choices: {
        correct: "le régime alimentaire",
        wrong: ["le régime agricole","le régime général"]
    }
  },
  {
    //Question 11
    question_string: "Retrouver les bons groupes de mots de ces différentes pièces jointes",
    tips:"Consigne : Pour associer ces mots, vous devez cliquez sur un groupe de la liste de gauche et un groupe de la liste de droite, afin de les relier ensemble",
    linkedFile:"",
    successMedia:"./media/Question11.gif",
    failMedia:"https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
    Type:"joinedList",
    choices: {
      lefties: ["acte","relevé", "avis", "attestation", "certificat", "bulletin", "livret", "carte", "notification", "déclaration"],
      righties: ["de salaire", "d’identité", "médical","sur l’honneur", "de Pôle emploi","de naissance/de mariage", "d’imposition/non imposition", "d’identité bancaire", "de famille", "d’attribution/de rejet AAH"],
      correctJoin : ["acte-de naissance/de mariage", "relevé-d’identité bancaire", "avis-d’imposition/non imposition", "attestation-de Pôle emploi", "certificat-médical", "bulletin-de salaire", "livret-de famille", "carte-d’identité", "notification-d’attribution/de rejet AAH", "déclaration-sur l’honneur"]
    }
  }
  ];

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
  
  function checkedListDesignBehaviour(linkedFile) {
      $("#connection-canvas").attr("style", "display:none;");
      if(!$("#quiz").hasClass("halfArea") && linkedFile){
        $("#quiz").addClass("halfArea");
      }
      if($("#quiz").hasClass("fullArea") && linkedFile){
        $("#quiz").removeClass("fullArea");
      }
      if($("#embedObject").hasClass("fullArea")){
        $("#embedObject").removeClass("fullArea");
      }
      if(!$("#embedObject").hasClass("halfArea")){
        $("#embedObject").addClass("halfArea");
      }
      $("#embedObject").attr("style", "display:inline-block;");
      if ($("#joinedListResult")) {
        $("#joinedListResult").remove();
      }
  }

  function joinedListDesignBehaviour() {
      $("#connection-canvas").attr("style", "display:inline-block;");
      if(!$("#quiz").hasClass("fullArea")){
        $("#quiz").addClass("fullArea");
      }
      if($("#quiz").hasClass("halfArea")){
        $("#quiz").removeClass("halfArea");
      }
      $("<div>").attr("id", "joinedListResult").attr("style", "display:none;").appendTo($("#embedObject"));
  }

  function validateJoinedList(correctJoin) {
    var values = $("#joinedListResult").text().split(",");
    if (values.length == correctJoin.length){
      for (var i = 0; i < values.length;i++) {
        var reverseChoicesTab = values[i].split("-");
        var reverseChoices = reverseChoicesTab[1]+"-"+reverseChoicesTab[0];
        if ($.inArray(values[i], correctJoin) == -1 && $.inArray(reverseChoices, correctJoin) == -1) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    
    if (self.questions[current_question_index].Type === "checkedList") {
      checkedListDesignBehaviour(self.questions[current_question_index].linkedFile);
    } else if (self.questions[current_question_index].Type === "joinedList") {
      joinedListDesignBehaviour();
    }
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
    if (self.questions[current_question_index].user_choice_index === self.questions[current_question_index].correct_choice_index || (self.questions[current_question_index].Type === "joinedList" && validateJoinedList(self.questions[current_question_index].correctJoin))){
      if (current_question_index < self.questions.length - 1) {
        var thisDisplay = self.questions[current_question_index].successMedia;
        autoPlayGif(thisDisplay);
        current_question_index++;
        removeVideo();
        change_question();
      } else if (current_question_index == self.questions.length - 1) {
        $('#submit-button').trigger("click");
      }
    } else {
        autoPlayVideo(self.questions[current_question_index].failMedia);
    }

  });
  
  function getFinalAnimation() {
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

  // Add listener for the submit answers button
  $('#submit-button').click(function() {
      // Show successMedia
      var thisDisplay = self.questions[current_question_index].successMedia;
      autoPlayGif(thisDisplay);

    // Determine how many questions the user got right
    var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
        score++;
      }
    }
    
    var message= 'Félicitation :)';
    getFinalAnimation();
    //remove answers
    var containerToUnfill = $('#question');
    if (containerToUnfill.children().length > 0) {
      containerToUnfill.children().each(function() {
      $(this).remove();
    });

    $("#next-question-button").remove();

    //remove canvas, tips and question label
    $("#connection-canvas").remove();
    $("#questionLabel").remove();
    $("#tipsContainer").remove();

  }
    $('#quiz-results-message').text(message);
    $('#quiz-results-score').html('Vous avez réussis les '+self.questions.length+' questions !');
    $('#quiz-results').slideDown();
    $('#quiz button').slideUp();
  });
  
  // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
  question_container.bind('user-select-change', function() {
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        if (self.questions[i].Type != "joinedList") {
          all_questions_answered = false;
          break;
        }
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  });
}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices, tips, linkedFile, type, successMedia, failMedia, correctJoin) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.tips = tips;
  this.Type = type;
  this.linkedFile = linkedFile;
  this.successMedia = successMedia;
  this.failMedia = failMedia;
  this.choices = [];
  this.correctJoin = correctJoin;
  this.user_choice_index = null;
  if (type === "checkedList") {
    $("#connection-canvas").attr("style", "display:none;margin-top:150px;");
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
  } else if (type === "joinedList") {
    // // Fill in this.choices with the choices
    var number_of_choices = correct_choice.length;
    for (var i = 0; i < number_of_choices; i++) {
      var lefties_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      var righties_choice_index = Math.floor(Math.random(0, correct_choice.length));

      this.choices[i] = {"leftie":wrong_choices[lefties_choice_index], "rightie":correct_choice[righties_choice_index]};

      // Remove the choice from the choice array so that we don't pick it again
      correct_choice.splice(righties_choice_index, 1);
      wrong_choices.splice(lefties_choice_index, 1);
    }
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
    question_string_h2 = $('<h2>').attr("id", "questionLabel").appendTo(headContainer);
  } else {
    question_string_h2 = headContainer.children('h2').first();
  }
  question_string_h2.text(this.question_string);

  //Add tips
  if (this.tips) {
    if (headContainer.children('#tipsContainer').length > 0) {
      $('#tipsContainer').remove();
    };
    var containerTips = $('<label>').attr("id", "tipsContainer")
                                    .text(this.tips).appendTo(headContainer); 
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
    $("#quiz").addClass("halfArea");
    $("#quiz").removeClass("fullArea");
  } else {
    $("#quiz").addClass("fullArea");
    $("#quiz").removeClass("halfArea");
  }

  // Clear old answers and create new ones
  if (container.children('p').length > 0) {
    container.children('p').each(function() {
      $(this).remove();
    });
  }
  if (container.children('div').length > 0) {
    container.children('div').each(function() {
      $(this).remove();
    });
  }
  if (this.Type === "checkedList") {
    setChoicesCheckedList(container, self);
  } else if (this.Type === "joinedList") {
    setChoicies(container, self, listenToClick)
  }
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

var setChoicesCheckedList = function (container, self) {
    for (var i = 0; i < self.choices.length; i++) {
      var containerTmp = $('<p>').attr('class', 'rowAnswer').appendTo(container)

      // Create the radio button
      var choice_radio_button = $('<input>')
        .attr('id', 'choices-' + i)
        .attr('type', 'radio')
        .attr('name', 'choices')
        .attr('value', 'choices-' + i)
        .attr('checked', i === self.user_choice_index)
        .appendTo(containerTmp).hide();
      
      // Create the label
      var choice_label = $('<label>')
        .attr('class', 'pAnswer')
        .attr('for', 'choices-' + i)
        .text(self.choices[i])
        .appendTo(containerTmp)
        .on("click", function(e){
          $(".pAnswer").removeClass("selected");
          $(this).toggleClass("selected")
        });
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
    var question = null;
    if (all_questions[i].Type === "checkedList") {
      question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong, all_questions[i].tips, all_questions[i].linkedFile, all_questions[i].Type, all_questions[i].successMedia, all_questions[i].failMedia, "");
    } else if (all_questions[i].Type === "joinedList") {
      question = new Question(all_questions[i].question_string, all_questions[i].choices.righties, all_questions[i].choices.lefties, all_questions[i].tips, all_questions[i].linkedFile, all_questions[i].Type, all_questions[i].successMedia, all_questions[i].failMedia, all_questions[i].choices.correctJoin);
    }
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});