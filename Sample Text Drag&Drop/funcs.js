$("input")
    .bind("drop", function(ev) {
        var elem = $("#"+ev.originalEvent.dataTransfer.getData("text") || ev.originalEvent.dataTransfer.getData("text/plain"))
        this.value = "";
        this.value = elem.text();
    return false;
});

    function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
