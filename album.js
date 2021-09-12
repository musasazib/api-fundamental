function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbum(data))
}

loadAlbum();

function displayAlbum(album) {
    const albumTitle = document.getElementById('album');
    for (const photo of album) {
        const p = document.createElement('p');
        p.innerText = photo.title;
        albumTitle.appendChild(p);
    }
}