(function(){
    
    // UI
    var guessColor = document.getElementById('guess-color');
    
    // traemos los div con tag color
    var colors = document.querySelectorAll('.color');
    
    
    
    // loopeamos por cada div y le damos atributo bkc random en RGB
    for (var i = 0; i < colors.length ; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var rgb = 'rgb('+ r + ' ,' + g + ' ,' + b + ')';
        //console.log(rgb);
        colors[i].style.backgroundColor = rgb;
        
        
    }
    
    // obtenemos un random de 6
    var seleccion = Math.floor((Math.random() * 6) + 1);
    
    // con el random, obtenemos uno de los colores
    var winner = colors[seleccion].attributes[2].nodeValue.toString().substr(17,19).replace(';','');
    guessColor.textContent = winner;
    
})();