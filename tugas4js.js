// 1. Membuat Fungsi menghitung banyaknya buah
function countBuah(arr) {

    let count = {};
    arr.forEach(i => {
        count[i] = (count[i] || 0) + 1;
    });
    return count;
}

// tidak boleh merubah soal di bawah ini
var list = [
    'Nanas', 'Apel', 'Pir', 'mangga', 'salak', 'manggis'
]

console.log(countBuah(list))
    // hasil yang di inginkan
    // {
    //     Nanas: 1,
    //     Apel: 1,
    //     Pir: 1,
    //     Mangga: 1,
    //     salak: 1,
    //     manggis: 1,
    // }

// 2. Berbelanja 
/**
 * =================
 * pemesanan barang
 * =================
 *
 * [Description]
 * kamu berbelanja pada suatu toko
 * kamu memiliki sejumlah uang dan 
 *  barang yang di jual:
 * 1. buku seharga 10000
 * 2. pulpen seharga 3000
 * 3. pensil seharga 2000
 *
 * [Instruction]
 * Hitunglah berapa barang yang dapat dibeli dengan jumlah uang yang dia punya
 * hitung sisa kembalian uang jika ada.
 *
 * [Example]
 * var @belanja = 'buku'
 * var @uang = 25000
 *
 * OUTPUT
 * 'Kamu membeli 2 pulpen dan memiliki kembalian sebanyak 3000'
 *
 * Karena dia memiliki uang 2500 dan ingin membeli buku. Maka kamu akan mendapatkan 2 buku
 * (2 x 10000) serta memiliki kembalian 5000.
 *
 * [Asumsi]
 * - Uang akan selalu lebih besar atau sama dengan dari harga barang yang akan dibeli.
 * - Barang yang dibeli hanya buku, pulpen, atau pensil
 */

function uangBelanja(uang, barang) {

    const berbelanja = [
        { barang: 'buku', harga: 10000 },
        { barang: 'pulpen', harga: 3000 },
        { barang: 'pensil', harga: 2000 }
    ];


    let belanja;
    let kembalian = barang.map(function(dagang) {
        if (dagang.barang === belanjaan) {
            let harga = dagang.harga;
            let jumlah = Math.floor(uang / harga);
            let sisa = uang % harga;

            belanja = { jumlah: jumlah, sisa: sisa };
            return belanja;
        } else {
            return false;
        }
    })
    return `Kamu belanja ${belanja.jumlah} ${belanjaan} dan memiliki kembalian sebanyak ${belanja.sisa}`;

}

console.log(uangBelanja(25000, 'buku'))
console.log(uangBelanja(25000, 'pulpen'))
console.log(uangBelanja(25000, 'pensil'))

// 3. Menghilangkan data tertentuh
function deleteUndefinedKeys(data) {
    // tuliskan coding kamu disini
    const newData = data.map(item => JSON.parse(JSON.stringify(item)));
    return newData
}


console.log(deleteUndefinedKeys([{
        name: 'Roma',
        address: undefined,
        email: 'roma@mail.com',
        age: undefined,
        gender: 'laki-laki'
    },
    {
        name: 'ruri',
        address: 'Timur',
        email: undefined,
        age: 21,
        gender: 'laki-laki'
    },
    {
        name: 'Nurul',
        address: 'Utara',
        email: undefined,
        age: 19,
        gender: 'Perempuan'

    }
]));
/*
[ { name: 'Roma', email: 'roma@mail.com', gender: 'laki-laki' },
  { name: 'ruti', address: 'Timur', age: 21, gender: 'laki-laki' } ]
  { name: 'Nurul', address: 'Utara', age: 19, gender: 'Perempuan' }
*/

console.log(deleteUndefinedKeys([{
        kelas: 'X',
        jumlah: 20,
        struktur_nama: ['Tri', 'Alma', 'Sifa', 'Elen'],
        jabatan: 'ketua,wakil,sekertaris,bendahara',
        alamat: undefined
    },
    {
        film: 'One Piece',
        formed: undefined,
        members: ['Luffi', 'Zoro', 'Nami', 'Sanji', 'Usopp', 'Chopper', 'Robin', 'Franki', 'Brook', 'Jinbe'],
        genre: 'Fantasi,Action',
        rating: undefined
    },
    {
        Film: 'Sigatsu Kimi no uso',
        formed: 2016,
        members: undefined,
        genre: undefined,
        rating: 8.9
    }
]));