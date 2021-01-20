const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Stack = require('../stack');
router.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

router.get('/', (req,res)=>{
    res.render('index.html');
});

router.post('/get_data', (req,res)=>{
    let data = req.body.dinput;
    console.log(typeof(data));
    //Aplication
    //const stack = new Stack();
    res.render('stackAnimation.html', '');
},error=>{
    console.log("Hubo un problema");
});

module.exports = router;