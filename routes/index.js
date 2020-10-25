const router = require('express').Router(); 
const { inToCm, lbToKg, calcBmr,} = require('../controllers/calculations'); 
// const validate = require('../controllers/validate');
const validate = require('../middleware/validate');  

router.get('/calc_health_stats', validate, (req,res) => { 
    // const validData = validate(req.query); 
    // console.log('valid: ', validData); 

    const info = {
        height: inToCm(req.query.height), 
        weight: lbToKg(req.query.weight), 
        age: req.query.age, 
        gender: req.query.gender.toLowerCase().trim(), 
        activity: req.query.activity.trim(),
    } 
    console.log(info); 
    const [err, bmr] = calcBmr(info); 
    res.send(info); 
})


module.exports = router; 

