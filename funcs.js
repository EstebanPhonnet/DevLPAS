//TODO make JSON disctionnary
var dictionnary = {
	"Domicile" : {
	   	"description" :"l'appartement, la maison... le lieu où l'on vit",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"Habitation", "Maison", "Appartement"
	   	]
   }, 
   "Convenir": {
	   	"description" :"qui est conforme à ses besoins ou à ses goûts",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"Agréer", "Satisfaire", "Correspondre"
	   	]
	}, 
   "Rejet": {
	   	"description" :"fait de ne pas accepter",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"Nier", "Repousser", "Retrait"
	   	]
	}
}

$(document).ready(function(){

	//render("Domicile");

	function render(word) {
		// $("#wordSearch").text(word);

		var listContainer = $("<ul>").attr("id", "wordSynonymsList");
		if (dictionnary[word]) {
			$("#wordToTranslate").html(word);
			$("#wordDescription").html(dictionnary[word].description);
			if ($("#wordSynonymsList").length) {
				$("#wordSynonymsList").remove();
			}
			dictionnary[word].synonymes.forEach(function(element, index) {
				$("<li>").attr("id", "synonym-"+index).attr("class", "synonym").text(element).appendTo(listContainer);	
			});
			$("#tipsVideo").remove();
			$('<iframe id="tipsVideo" width="420" height="315" frameborder="0" allowfullscreen></iframe>').attr("src", dictionnary[word].videoUrl)
    		.appendTo("#iframe-container");
			$("#tipsVideo").show();
			$("#searchErrorMsg").hide();
		} else {
			$("#tipsVideo").hide();
			$("#searchErrorMsg").show();
		}
		listContainer.appendTo("#wordSynonyms");
	}
	
	$("#wordSearch").on('keydown', function(e) {
	    if (e.which == 13) {
	        e.preventDefault();
	        console.log($("#wordSearch").val());
			render($("#wordSearch").val());
	    }
	});

	$("#wordSearchBtn").click(function() {
		console.log($("#wordSearch").val());
		render($("#wordSearch").val());
	});

    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});