const calculateBtn = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset");
const form = document.querySelector("form");

calculateBtn.addEventListener("click", function () {
  let heightInput = document.querySelector(".height").value;
  let weightInput = document.querySelector(".weight").value;
  let result = document.querySelector(".bmiResult ");
  let bmiCat = document.getElementById("bmiNorm");

  if (heightInput == 0 || weightInput == 0) {
    alert("Please enter values");
    return;
  }

  heightInput = heightInput / 100;
  let BMI = weightInput / heightInput ** 2;
  BMI = BMI.toFixed(2);

  result.textContent = BMI;

  if (BMI < 18.5) {
    bmiNorm = "Underweight";
    bmiCat.style.color = "#339af0";
  } else if (BMI > 18.5 && BMI < 24.9) {
    bmiNorm = "Healthy weight";
    bmiCat.style.color = "#51cf66";
  } else if (BMI > 24.9 && BMI < 29.9) {
    bmiNorm = "Overweight";
    bmiCat.style.color = "#ffd43b";
  } else if (BMI > 29.9) {
    bmiNorm = "Obese";
    bmiCat.style.color = "#e03131";
  }

  bmiCat.innerHTML = bmiNorm;
});

resetBtn.addEventListener("click", function () {
  form.reset();
  document.querySelector(".bmiResult").innerHTML = "__";
  document.getElementById("bmiNorm").innerHTML = "_ _ _";
  document.getElementById("bmiNorm").style.color = "#343a40";
});
