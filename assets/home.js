const artistInput = document.querySelector('#query');
const button = document.querySelector("#btn");
if (button) {
    button.addEventListener('click', function() {
        let artist = 'search'; 
        if (artistInput){
            artist = artistInput.value;
        }
        console.log(artist);
    });
}


