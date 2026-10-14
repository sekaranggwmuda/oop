//const books = {
  //  judul: "Cara menghilangkan depresi dengan cara menjadi idiot",
    //penulis: "Kawndeze Munni",
    //tahun_terbit: "2026",

    //dibaca: function(){
      //  console.log("Buku ini dipelajari di mapel kejuruan" +  this.judul)
   // }
//};

// const mobil ={
//     merek : "esemka x kawn special edition",
//     warna : "deep purple",
//     kecepatan : 67,

//     jalan : function(){
//         this.kecepatan += 100;
//         console.log("mobil berjalan di kecepatan" + this.kecepatan);
//     }
// }
// mobil.jalan();

// console.log(books.judul);
// books.dibaca();

// class Siswapplg{
//     constructor(nama,kelas){
//         this.nama = nama;
//         this.kelas = kelas;
//     }
//     perkenalan(){
//         console.log(`nama:  ${this.nama}`);
//         console.log(`kelas:  ${this.kelas}`);
//         console.log("halo nama saya" +  this.nama);
//     }
//     seragam(){
//         console.log("menggunakan seragam jurusan");
//     }
// }

// const siswa1 = new Siswapplg("kawn", "XI PPLG");
// siswa1.perkenalan();
// const siswa2 = new Siswapplg ();
// siswa2.seragam();

class Produk{
    constructor(nama, harga, jumlah){
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }


tampilkanInfo(){
    console.log("nama produk" + this.nama)
    console.log("harga produk" + this.harga)
    console.log("jumlah produk" + this.jumlah)
    }
    hitungdiskon(persen){
        return this.harga-(this.harga * persen/100)
    }
}

const produk1 = new Produk("hiu_goreng", 50000, 2);
produk1.tampilkanInfo();
console.log("harga produk1 setelah diskon : " + produk1.hitungdiskon(5))
const produk2 = new Produk("kursigaming", 250000, 2);
produk2.tampilkanInfo();
console.log("harga produk2 setelah diskon : " + produk2.hitungdiskon(25))
const produk3 = new Produk("alatpel", 12000, 2);
produk3.tampilkanInfo();
console.log("harga produk3 setelah diskon : " + produk3.hitungdiskon(1))