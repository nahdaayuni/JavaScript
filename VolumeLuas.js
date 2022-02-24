class Lingkaran {
  constructor(r) {
    this.jarijari = r;
  }

  luas = () => {
    return 3.14 * this.jarijari * this.jarijari
  }
  keliling = () => {
    return 3.14 * this.jarijari * 2
  }
}

class Tabung extends Lingkaran {
  constructor(r, t) {
    super(r);
    this.tinggi = t
    
  }
  volume = () => {
    return 3.14 * this.jarijari * this.jarijari * this.tinggi
  }
  luasPermukaan = () => {
    return 2 * 3.14 * this.jarijari * (this.jarijari + this.tinggi)
  }
  luasSelimut = () => {
    return 2 * 3.14 * this.jarijari *  this.tinggi
  }
}

class Kerucut extends Lingkaran {
  constructor(r, t, s) {
    super(r)
    this.tinggi = t
    this.garispelukis = s;
  }
  volume = () => {
    return 1/3 * 3.14 * this.jarijari * this.jarijari * this.tinggi
  }
  luasPermukaan = () => {
    return 3.14 * this.jarijari * (this.garispelukis + this.jarijari)
  }
  luasSelimut = () => {
    return 3.14 * this.jarijari * this.garispelukis
  }
}

class Bola extends Lingkaran {
  constructor(r) {
    super(r)
    
  }
  volume = () => {
    return (4 / 3) * 3.14 * this.jarijari * this.jarijari * this.jarijari
  }
  luasPermukaan = () => {
    return 4 * 3.14 * this.jarijari * this.jarijari
  }
}

let bola = new Bola (15)
console.log("Luas Bola = " + bola.luasPermukaan());
console.log("Volume Bola = " + bola.volume());

console.log("--------------------------------");

let pembatas = new Kerucut(10,40,41.2);
console.log("Luas Pembatas = " + pembatas.luasPermukaan());
console.log("Volume Pembatas = " + pembatas.volume());

console.log("--------------------------------");

let gelas = new Tabung(7.5,50);
console.log("Luas Gelas = " + gelas.luasPermukaan());
console.log("Volume Gelas = " + gelas.volume());
