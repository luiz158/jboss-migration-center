$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results)
    { 
        return 0; 
    }
    return results[1] || 0;
}

activateSnippetIdTooltip = function(id) {
    $(function() {
        if ($.urlParam('activateSnippetIds') == "true") {
            $('#' + id).tooltip();
        }
    });
}
