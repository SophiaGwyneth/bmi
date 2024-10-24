document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get input values from the DOM
    const age = parseInt(document.getElementById('age').value);
    const height_cm = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Age validation
    if (isNaN(age) || age < 1 || age > 120) {
        displayResult('Age must be between 1 to 120', '', '');
        return;
    }

    // Convert height to meters
    const height_m = height_cm / 100;

    if (height_m > 0) {
        // BMI calculation
        const bmi = weight / (height_m ** 2);
        const result = `BMI: ${bmi.toFixed(1)}`;

        // Determine BMI category and provide health tips
        let category = "";
        let healthTips = "";

        if (bmi < 18.5) {
            category = "Underweight";
            healthTips = "You're underweight. To gain weight in a healthful way, think about eating more frequent, high-nutrient meals. Add entire grains, healthy fats, and lean proteins. If necessary, seek advice from a healthcare professional.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal";
            healthTips = "You weigh a normal amount. By maintaining an active lifestyle and eating a balanced diet, you can maintain your ideal weight. Every week, try to get in at least 150 minutes of moderate activity.";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
            healthTips = "You are overweight. Consider about eating a better diet and doing more exercise. Prioritise portion control, cut back on processed meals, and include regular exercise, such as cycling or walking.";
        } else {
            category = "Obesity";
            healthTips = "You fall in the obesity category.  A healthcare professional should be consulted for specialized guidance. Your health can be enhanced by gradually losing weight while maintaining a healthy diet and engaging in constant physical activity. Think about eating more veggies and lean meats and consuming less sugar, fat, and refined carbohydrates.";
        }

        // Display the results, category, and health tips
        displayResult(result, `Category: ${category}`, healthTips);
    } else {
        displayResult('Height must be greater than zero.', '', '');
    }
});

function displayResult(bmiResult, category, healthTips) {
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('bmi-result').innerHTML = bmiResult;
    document.getElementById('bmi-category').innerHTML = category;
    document.getElementById('health-tips').innerHTML = healthTips;
}

