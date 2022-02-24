let barang = [
  { nama: "Beras", harga: 10000, jumlah: 5 },
  { nama: "Gula", harga: 14000, jumlah: 5 },
  { nama: "Telur", harga: 20000, jumlah: 2 },
  { nama: "Minyak Goreng", harga: 9000, jumlah: 10 },
];

console.log("========= Total Belanja =========");

let total = 0;
barang.map((bar, index) => {
  let subtotal = bar.harga * bar.jumlah;
  console.log(
    "Nama barang : " +
      bar.nama +
      "\n Jumlah : " +
      bar.jumlah +
      "\n Subtotal: " +
      subtotal
  );
  total += subtotal;
});
console.log("Total yang harus dibayarkan adalah " + total);
