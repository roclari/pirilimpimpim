function shuffle() {
    var slct = document.getElementById('selector')
    var btn = document.getElementById('btn')
    btn.addEventListener('click', function(event) {
        event.target.innerHTML = '~(｡･ω･｡)つ━☆・*。 ' + slct.value + '~';
        if (slct.value === "") {
            event.target.innerHTML = '+'
        }
    }, false)
        
};