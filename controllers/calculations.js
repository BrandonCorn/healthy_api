//calculate inches to cm: 1in == 2.54cm
//**RETURN VALUE NEEDS TO BE ROUNDED TWO PLACES!!
const inToCm = inches => inches * 2.54


//pounds to kilograms: 1lb == 0.454kg
//**RETURN VALUE NEEDS TO BE ROUNDED TWO PLACES!! */
const lbToKg = pounds => pounds * .454


//BMR formula
//** Male: 66.4730 + (13.7516 * wKg) + (5.0033 * hCm) - (6.7550 * ageY)
//** Female: 655.0955 + (9.5634 * wKg) + (1.8496 * hCm) - (4.6756 * ageY) */ */
//** BMR NEEDS TO BE ROUNDED TWO PLACES!! */
const calcBmr = personData => {
    if (personData.gender === 'male'){
        let bmr = 66.4730 + (13.7516 + personData.weight) + (5.0033 * personData.height)
            - (6.7550 * personData.age); 
        console.log('male_bmr: ',bmr); 
        return [null, bmr]; 
    }
    else if (personData.gender === 'female'){
        let bmr = 655.0955 + (9.5634 * personData.weight) + (1.8496 * personData.height)
            - (4.6756 * personData.age); 
        console.log('female_bmr: ',bmr); 
        return [null, bmr]; 
    }
    else {
        return ['User has no gender', null]
    }
}



module.exports = {
    inToCm, 
    lbToKg,
    calcBmr,
}