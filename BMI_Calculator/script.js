const heightInput = document.querySelector('.height');
const weightInput = document.querySelector('.weight');
const result = document.querySelector('.result');
const category = document.querySelector('.category');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (heightInput.value === '' || weightInput.value === '') {
    return;
  }
  else if (height < 50 || height > 250) {
    alert('Please enter a valid height in cm!');
    return;
  } else if (weight < 1 || weight > 500) {
    alert('Please enter a valid weight in kg!');
    return;
  }
  else {
    const heightM = height / 100;
    const BMI = weight / (heightM * heightM);
    result.innerHTML = BMI.toFixed(2) + " BMI";
    if (BMI < 18.5) {
      category.innerHTML = 'Underweight';
    } else if (BMI < 25) {
      category.innerHTML = 'Normal';
    } else if (BMI < 30) {
      category.innerHTML = 'Overweight';
    } else {
      category.innerHTML = 'Obese';
    }
  }
});