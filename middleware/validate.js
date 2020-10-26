module.exports = (req,res,next) => {
    if (!req.query.height) return res.status(400).send('Missing height for calculation'); 
    if (!req.query.weight) return res.status(400).send('Missing weight for calculation'); 
    if (!req.query.age) return res.status(400).send('Missing age for calculations'); 
    if (!req.query.gender) return res.status(400).send('Missing gender for calculations'); 
    if (!req.query.activity) return res.status(400).send('Missing activity level for calculations');
    
    //check miscellaneous 
    if (req.query.age < 1 || req.query.age > 100) return res.status(400).send('Not a valid age'); 
    if (req.query.gender.toLowerCase().trim() != 'male' && req.query.gender.toLowerCase().trim() != 'female') return res.status(400).send('Not a valid gender');  
    if (parseInt(req.query.activity) > 5 || parseInt(req.query.activity) < 1) return res.status(400).send('Not a valid activity value, see documentation'); 
    else{
        next(); 
    }
}