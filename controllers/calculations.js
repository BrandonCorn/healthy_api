//calculate inches to cm: 1in == 2.54cm
//**RETURN VALUE NEEDS TO BE ROUNDED TWO PLACES!!
const inToCm = inches => inches * 2.54


//pounds to kilograms: 1lb == 0.454kg
//**RETURN VALUE NEEDS TO BE ROUNDED TWO PLACES!! */
const lbToKg = pounds => pounds * .454


//BMI Formula
//** BMI = (wLb / hIn**2) * 703 */
//** RETURN VALUE NEEDS TO BE ROUNDED TWO PLACES */
const calcBMI = personData => (personData.weight / personData.height**2) * 703


//BMR formula
//** Male: 66.4730 + (6.3 * wLb) + (12.9 * hIn) - (6.8 * ageY)
//** Female: 655 + (4.3 * wLb) + (4.7 * hIn) - (4.7 * ageY) */ */
//** BMR NEEDS TO BE ROUNDED TWO PLACES!! */
const calcBMR = personData => {
    if (personData.gender === 'male'){
        let bmr = 66 + (6.3 * personData.weight) + (12.9 * personData.height) 
            - (6.8 * personData.age); 
        return bmr; 
    }
    else if (personData.gender === 'female'){
        let bmr = 655 + (4.3 * personData.weight) + (4.7 * personData.height)
            - (4.7 * personData.age);  
        return bmr; 
    }
    else {
        return; 
    }
}

// To calculate calorie intake we use the activity level of person on scale from 1 - 5
// This returns calories to maintain current weight
// 1: Little or no exercise, intake = BMR * 1.2
// 2: Light exercise/sports 1-3 days a week, intake = BMR * 1.375
// 3: Moderate exercise/sports 3-5 days a week, intake = BMR * 1.55
// 4: Hard exercise/sports 6-7 days a week, intake = BMR * 1.725
// 5: Very Hard exercise/sports & physical job or 2 a day training, intake = BMR * 1.9
const calcCalories = (activity,bmr) => {
    if (activity == 1 ) return bmr * 1.2
    else if (activity == 2) return bmr * 1.375
    else if (activity == 3) return bmr * 1.55
    else if (activity == 4) return bmr * 1.725
    else if (activity == 5) return bmr * 1.9
}



module.exports = {
    inToCm, 
    lbToKg,
    calcBMI,
    calcBMR,
    calcCalories,
}