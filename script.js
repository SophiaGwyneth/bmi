document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values from the DOM
    const age = parseInt(document.getElementById('age').value);
    const height_cm = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Age validation
    if (age < 1 || age > 120) {
        document.getElementById('bmi-result').innerHTML = "Age must be between 1 to 120";
        document.getElementById('bmi-category').innerHTML = "";
        return;
    }

    // Convert height to meters
    const height_m = height_cm / 100;

    if (height_m > 0) {
        // BMI calculation
        const bmi = weight / (height_m ** 2);
        const result = `BMI: ${bmi.toFixed(1)}`;

        // BMI category
        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        // Display results
        document.getElementById('results').classList.remove('hidden');
        document.getElementById('bmi-result').innerHTML = result;
        document.getElementById('bmi-category').innerHTML = `Category: ${category}`;
    } else {
        document.getElementById('bmi-result').innerHTML = "Height must be greater than zero.";
        document.getElementById('bmi-category').innerHTML = "";
    }
});
