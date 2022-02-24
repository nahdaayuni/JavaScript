let tb = 1.7;
let bb = 90;
let bmi = bb/tb*tb;

if (bmi < 18.5) {
  console.log("Kekurangan berat badan");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal(ideal)");
} else if (bmi >= 25.0 && bmi <= 29.9) {
  console.log("Kelebihan berat badan");
} else { (bmi >= 30.0) 
  console.log("Kegemukan Obesitas");
}