 function unblur() {
  onFocus();
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

function autoPlayVideo(){
  "use strict";
  $("#quiz").block({ message: null });
  // $("#videoContainer").unblock();
  onBlur();
  $("#questionLabel").css('visibility', 'hidden');
  $("#tipsContainer").css('visibility', 'hidden');
  $("#videoContainer").html('<div id="iframe-container"><h3>Vous avez une petite erreur, voici une vidéo explicative pour vous aider</h3><a href="#" class="closeBtn" onclick="this.parentNode.parentNode.removeChild(this.parentNode);unblur();"> >>>Fermer la vidéo<<< </a>' +
    '<iframe id="tipsVideo" width="840" height="473" src="https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1" frameborder="0" allowfullscreen wmode="opaque"></iframe></div>');
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