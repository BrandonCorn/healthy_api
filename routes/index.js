const router = require('express').Router(); 
const { inToCm, lbToKg, calcBMI, calcBMR, calcCalories } = require('../controllers/calculations'); 
const validate = require('../middleware/validate');  

router.get('/calc_health_stats', validate, async (req,res) => { 
    const userData = {
        height: req.query.height, 
        weight: req.query.weight, 
        age: req.query.age, 
        gender: req.query.gender.toLowerCase().trim(), 
        activity: req.query.activity.trim(),
    } 

    const healthData = {
        BMI: calcBMI(userData), 
        BMR: calcBMR(userData), 
    }

    healthData.Calories = await calcCalories(userData.activity,healthData.BMR); 
    console.log('bmi: ',healthData.BMI); 
    console.log('bmr: ', healthData.BMR); 
    console.log('calories: ', healthData.Calories); 
    if (!healthData.BMI) res.status(400).send('Error calculating BMI'); 
    if (!healthData.BMR) res.status(400).send('Error calculating BMR'); 
    if (!healthData.Calories) res.status(400).send('Error calculating maintenance calorie intake'); 

    res.status(200).send(healthData); 
})


module.exports = router; 

