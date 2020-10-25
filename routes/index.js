const router = require('express').Router(); 


router.get('/calculate_bmi_bmr', (req,res) => {
    const info = {
        height: req.query.height, 
        weight: req.query.weight, 
        age: req.query.age, 
        gender: req.query.gender, 
        activity: req.query.activity,
    } 

    res.send('made it here'); 
})


module.exports = router; 

