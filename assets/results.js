let artistName = 'artist';
let discography = [];
let searchCount = localStorage.getItem('searchCount');


function changePage() {
    searchCount++;
    localStorage.setItem('searchCount', searchCount);
    updateCount();
    recArtist();
    console.log(artistName);
    document.getElementById("artName").innerHTML = artistName;
    fetch("https://www.theaudiodb.com/api/v1/json/2/discography.php?s=" + artistName)        
    .then(function (response) {
            return response.json();
       })
        .then (function (data) {
            discography = data.album;
            console.log(discography);
            let discographyElement = document.getElementById('#list-of-genres');
            discographyElement.innerHTML = '';
            let i = 1;
            discography.forEach( function (album) {
                console.log(album.strAlbum);
                let albumElement = document.createElement('p');
                albumElement.textContent = i + ". " + album.strAlbum;
                discographyElement.appendChild(albumElement);
                i++;
            }
        )
       }
    )
}

function recArtist() {
    let artist = document.getElementById("query").value.trim();
    artistName = artist;
}

function updateCount() {
    let searchCountElement = document.getElementById('searchCount');
    searchCountElement.textContent = localStorage.getItem('searchCount') || 0;
}