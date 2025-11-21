let scrollRightSong = document.getElementById('scrollRightSong');
let scrollLeftSong = document.getElementById('scrollLeftSong');

let popular_music = document.getElementsByClassName('popular_music')[0];

scrollRightSong.addEventListener('click', () => {
    popular_music.scrollLeft += 300;
})

scrollLeftSong.addEventListener('click', () => {
    popular_music.scrollLeft -= 300;
})


let scrollRightArtist = document.getElementById('scrollRightArtist');
let scrollLeftArtist = document.getElementById('scrollLeftArtist');

let Jaw_bai = document.getElementById('Jaw_bai')[0];


scrollRightArtist.addEventListener('click', () => {
    Jaw_bai.scrollLeft += 300;
})

scrollLeftArtist.addEventListener('click', () => {
    Jaw_bai.scrollLeft -= 300;
})