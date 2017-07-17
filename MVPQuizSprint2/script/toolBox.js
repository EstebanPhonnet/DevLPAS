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
	}, 
   "Tacite": {
	   	"description" :"Pas dit explicitement",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"induit", "implicite", "sous-entendu"
	   	]
	}, 
   "Nécéssaire": {
	   	"description" :"Un besoin, \"il faut !\"",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"absolu", "obligatoire", "essentiel"
	   	]
	}, 
   "Comprendre": {
	   	"description" :"Avoir dedans",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"contient", "possède", "à"
	   	]
	}, 
   "Ergothérapeute": {
	   	"description" :"Metier qui adapte le domicile ou bien le poste de travail d'une personne handicapée en fonction de ses besoins techniques et humains",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"Ergo => rendre facile d'utilisation", "thérapeute => personne qui soigne ou qui aide"
	   	]
	}, 
   "Finaliser": {
	   	"description" :"Terminer un dossier, un travail",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"finir", "terminer", "compléter"
	   	]
	}, 
   "Se rendre ...": {
	   	"description" :"Se déplacer, aller",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : []
	}, 
   "Faire savoir": {
	   	"description" :"Donner une information",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : ["tenir informé", "mettre au courant"]
	}, 
   "Prendre en charge (lettre)": {
	   	"description" :"Accepter de verser la prestation (admninistration)",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : [
	   		"Payer les frais d'admninistration", "S'occuper des coûts lié à la démarche"
	   	]
	}, 
   "Conformément à ...": {
	   	"description" :"Suivant ce que dit un texte ou un discours",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : []
	}, 
   "Se traduire par ...": {
	   	"description" :"Avoir pour conséquence",
	   	"videoUrl" :"http://www.youtube.com/embed/TfLmXUrFFPw?autoplay=1",
	   	"synonymes" : []
	}
};

$(document).ready(function(){

	function loadWordDefinition(e) {
		e.preventDefault();
		$("#wordSearch").val(e.currentTarget.innerHTML);
		$("#wordSearchBtn").trigger('click');
		return false; 
	}

	function init() {
		var wordListContainer = $("#wordList");
		$.each(dictionnary, function(key, val){
			var subContainer = $("<li>").attr("id", "word-"+key).attr("class", "wordListElement");
			$("<a>").click(loadWordDefinition).text(key).appendTo(subContainer);
			subContainer.appendTo(wordListContainer);
		});

	};

	init();

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
			$("#tipsVideo-toolBox").remove();
			$('<iframe id="tipsVideo-toolBox" width="420" height="315" frameborder="0" allowfullscreen></iframe>').attr("src", dictionnary[word].videoUrl)
    		.appendTo("#iframe-container-toolBox");
			$("#tipsVideo-toolBox").show();
			$("#searchErrorMsg").hide();
		} else {
			$("#tipsVideo-toolBox").hide();
			$("#searchErrorMsg").show();
		}
		listContainer.appendTo("#wordSynonyms");
	}
	
	$("#wordSearch").on('keydown', function(e) {
	    if (e.which == 13) {
	        e.preventDefault();
			render($("#wordSearch").val());
	    }
	});

	$("#wordSearchBtn").click(function() {
		render($("#wordSearch").val());
	});


	var toggleValue = "+";
	$("#flip").click(function(){
		$("#panel").slideToggle("slow");
		$("#flip").animate({
			"marginBottom" : toggleValue + "=450px"
		}, 600, function(){});
		if (toggleValue === "+") {
			toggleValue = "-";
		} else {
			toggleValue = "+";
		}
	});
});