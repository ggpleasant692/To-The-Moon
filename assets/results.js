let artistName = 'artist';

function changePage() {
    recArtist();
    console.log(artistName);
    document.getElementById("artName").innerHTML = artistName;
    document.getElementById('results').style.visibility='visible';
    document.getElementById('discography').innerHTML = artistName;
    document.getElementById('video').innerHTML = 'Artist Video';
}
function recArtist() {
    let artist = document.getElementById("query").value;
    artistName = artist;
}