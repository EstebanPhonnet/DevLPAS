 function unblur() {
  onFocus();
  $("#flip").css('visibility', 'visible');
  $("#panel").css('visibility', 'visible');
  $("#questionLabel").css('visibility', 'visible');
  $("#tipsContainer").css('visibility', 'visible');
  $("#quiz").unblock();
 }

function onBlur() {
    document.body.className = 'blurred';
};
function onFocus(){
    document.body.className = 'focused';
};

function autoPlayVideo(videoToPlay){
  "use strict";
  $("#quiz").block({ message: null });
  // $("#videoContainer").unblock();
  onBlur();
  $("#questionLabel").css('visibility', 'hidden');
  $("#tipsContainer").css('visibility', 'hidden');
  $("#videoContainer").html('<div id="iframe-container"><h3 class="videoMessageTips">Vous avez une petite erreur, voici une vidéo explicative pour vous aider</h3><a href="#" class="closeBtn" onclick="this.parentNode.parentNode.removeChild(this.parentNode);unblur();"> >>>retour à la question<<< </a>' +
    '<iframe id="tipsVideo" width="840" height="473" src="'+ videoToPlay+ '" frameborder="0" allowfullscreen wmode="opaque"></iframe></div>');
}

function autoPlayGif(gifToPlay){
  "use strict";
  $("#videoContainer").unblock();
  if (gifToPlay) {
    // $("#quiz").block({ message: null });
    // onBlur();
    $("#flip").css('visibility', 'hidden');
    $("#panel").css('visibility', 'hidden');
    $("#questionLabel").css('visibility', 'hidden');
    $("#tipsContainer").css('visibility', 'hidden');
    $("#videoContainer").html('<div id="iframe-container"><h3 class="videoMessageTips">  Bravo !  </h3><a href="#" class="closeBtn" onclick="this.parentNode.parentNode.removeChild(this.parentNode);unblur();"> Continuer ? (clic ici) </a>' +
      '<img height="100%"  src="' + gifToPlay + '" id="sucessGif"></div>');
  }
}

function removeVideo(){
  $("#tipsVideo").remove();
}

$('.overlay').click(function(e){
    var left = $(window).scrollLeft();
    var top = $(window).scrollTop();

    // //hide the overlay for now so the document can find the underlying elements
    $(this).css('display','none');
    // //use the current scroll position to deduct from the click position
    $(document.elementFromPoint(e.pageX-left, e.pageY-top)).trigger('click');
    if($(this).parent().hasClass("fullArea")) {
      //prevent canvas from vanish when user click on the toolBox button
      $(this).css('display','inline-block');
    }
});

$('.overlay').hover(function(e) {
    var left = $(window).scrollLeft();
    var top = $(window).scrollTop();

    // //hide the overlay for now so the document can find the underlying elements
    $(this).css('display','none');
    // //use the current scroll position to deduct from the click position
    $(document.elementFromPoint(e.pageX-left, e.pageY-top)).trigger('hover');
    if($(this).parent().hasClass("fullArea")) {
      //prevent canvas from vanish when user click on the toolBox button
      $(this).css('display','inline-block');
    }
});