 function unblur() {
  onFocus();
  $("#quiz").unblock();
 }

function onBlur() {
    document.body.className = 'blurred';
    console.log(document.activeElement);
};
function onFocus(){
    document.body.className = 'focused';
    console.log(document.activeElement);
};

function autoPlayVideo(){
  "use strict";
  $("#quiz").block({ message: null });
  // $("#videoContainer").unblock();
  onBlur();
  $("#videoContainer").html('<div id="iframe-container"><h3>Vous avez une petite erreur, voici une vidéo explicative pour vous aider</h3><a href="#" class="closeBtn" onclick="this.parentNode.parentNode.removeChild(this.parentNode);unblur();"> >>>Fermer la vidéo<<< </a>' +
    '<iframe id="tipsVideo" width="840" height="473" src="https://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1" frameborder="0" allowfullscreen wmode="opaque"></iframe></div>');
}

function removeVideo(){
  $("#tipsVideo").remove();
}