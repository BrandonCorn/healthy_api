module.exports = (req,res,next) => {
    if (!req.query.height) return res.status(400).send('Missing height for calculation'); 
    if (!req.query.weight) return res.status(400).send('Missing weight for calculation'); 
    if (!req.query.age) return res.status(400).send('Missing age for calculations'); 
    if (!req.query.gender) return res.status(400).send('Missing gender for calculations'); 
    if (!req.query.activity) return res.status(400).send('Missing activity level for calculations'); 
    else{
        next(); 
    }
}