const data = [{
        gambar: "iky_.jpg",
        nama: "Muhammad Annur Riski"
    },
    {
        gambar: "saidis.jpeg",
        nama: "Muhammad Saidi"
    },
    {
        gambar: "rian.jpeg",
        nama: "Rian Hendra Saputra"
    },
    {
        gambar: "daffa.jpeg",
        nama: "Daffa Ramadhan Nugraha"
    },
    {
        gambar: "bintang_2.png",
        nama: "Bintang Lazuardi Al Emre"
    },
    {
        gambar: "ari.jpeg",
        nama: "Surya Arinaldi"
    },
    {
        gambar: "daus.jpg",
        nama: "Nur Latifah"
    },
    {
        gambar: "kya.jpeg",
        nama: "Rizkya Nabilla"
    },
    {
        gambar: "intan.jpg",
        nama: "Intan Arini"
    },
    {
        gambar: "yazid.jpg",
        nama: "Yazid Abrar"
    }
]



const divHuman = document.getElementById('human');

data.forEach(e => {
    divHuman.innerHTML += `
    <div class="image-human" id="image-human">
        <img src="img/human/${e.gambar}" alt="${e.nama}">
        <span>${e.nama}</span>
    </div>
    `;
});

// 