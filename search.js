

function search(searchString){
    resetFilters();
    var words=searchString.toLowerCase().split(" ");
    for(var i=0;i<words.length;i++){
        filterOnWord(words[i]);
    }
}
function filterOnWord(word){
    var index;
    for(var n=0;n<filters.length;n++)
        if((index=filters[n].filters.indexOf(word))>=0){
            document.getElementById(filters[n].name+index).onclick(true);
            document.getElementById(filters[n].name+index).checked=true;
            return;
        }
}