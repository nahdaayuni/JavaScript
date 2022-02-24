let awal = 4
let rasio = 3
let n = 10
let total = awal


for (let i = 0; i < n; i++){
    awal = awal * rasio
    total = total + awal
}
console.log("Nilai Un = " + awal)
console.log("Nilai Jumlah Deret Geometri = " + total);