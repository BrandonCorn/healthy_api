const router = require('express').Router(); 
const { calcBMI, bmiHealth, calcBMR, calcCalories, calcLossGain } = require('../controllers/calculations'); 
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
    if (!healthData.bmi) return res.status(400).send('Error calculating BMI'); 
    healthData.bmi_health = bmiHealth(healthData.bmi); 
    if (!healthData.bmr) return res.status(400).send('Error calculating BMR');
    healthData.maint_cals = await calcCalories(userData.activity,healthData.bmr);  
    if (!healthData.maint_cals) return res.status(400).send('Error calculating maintenance calorie intake'); 
    calcLossGain(healthData); 
    return res.status(200).send(healthData); 
})


module.exports = router; 

