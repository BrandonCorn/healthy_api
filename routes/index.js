const router = require('express').Router(); 
const { inToCm, lbToKg, calcBMI, calcBMR, calcCalories, loseGain } = require('../controllers/calculations'); 
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
        bmi: calcBMI(userData), 
        bmr: calcBMR(userData), 
    }
    healthData.maint_cals = await calcCalories(userData.activity,healthData.bmr); 
    loseGain(healthData);  
    console.log(healthData); 
    if (!healthData.bmi) res.status(400).send('Error calculating BMI'); 
    if (!healthData.bmr) res.status(400).send('Error calculating BMR'); 
    if (!healthData.maint_cals) res.status(400).send('Error calculating maintenance calorie intake'); 

    res.status(200).send(healthData); 
})


module.exports = router; 

