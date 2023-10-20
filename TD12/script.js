const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const albumsContainer = document.getElementById('albums-container');

function searchAndDisplayAlbums(artistName, token) {
    const url = 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(artistName) + '&type=artist';

    fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then(data => {
        const artistId = data.artists.items[0].id;
        const albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';

        return fetch(albumsUrl, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    })
    .then(response => response.json())
    .then(data => {
        const albums = data.items;

        albumsContainer.innerHTML = '';

        albums.forEach(function(album) {
            const albumCard = document.createElement('div');
            albumCard.classList.add('album-card');

            const albumImage = document.createElement('img');
            albumImage.src = album.images[0].url;
            albumImage.classList.add('album-image');
            albumCard.appendChild(albumImage);

            const albumTitleLink = document.createElement('a');
            albumTitleLink.href = album.external_urls.spotify;
            albumTitleLink.innerText = album.name;
            albumTitleLink.classList.add('album-title');
            albumCard.appendChild(albumTitleLink);

            const albumDetails = document.createElement('div');
            albumDetails.classList.add('album-details');

            const albumReleaseDate = document.createElement('p');
            albumReleaseDate.innerText = 'Date de sortie: ' + album.release_date;
            albumDetails.appendChild(albumReleaseDate);

            const albumTotalTracks = document.createElement('p');
            albumTotalTracks.innerText = 'Nombre total de pistes: ' + album.total_tracks;
            albumDetails.appendChild(albumTotalTracks);

            albumCard.appendChild(albumDetails);

            albumsContainer.appendChild(albumCard);
        });
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur : album introuvable.');
    });
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value;
    
    searchAndDisplayAlbums(searchTerm, 'BQCjYq1wyX6C3Gu3LnI6ZaozpYQUpx8OZ0r0OLlJM-71ctO6e5Y7gzWGYsc1_JJOknLUJy5upifyS79ztMVdw4AoGKtdhFxNVD_AAr6qt1gTiHWFH4s');
});
