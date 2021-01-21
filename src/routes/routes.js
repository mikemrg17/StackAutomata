const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Stack = require('../stack');
const fs = require('fs');
router.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

router.get('/', (req,res)=>{
    res.render('index.html');
});

router.post('/get_data', (req,res)=>{
    let data = req.body.dinput;
    let contador0 = 0;
    let contador1 = 0;
    for(let q = 0; q < data.length; q++){
        if(data[q] == "0") contador0++;
        else contador1++;
    }
    if(contador0 == contador1){
        //Aplication
        fs.createWriteStream('output.txt');
        let substring;
        let state = "q";
        let xsubstring = "";
        let size=0;
        //fs.appendFileSync('output.txt', `d(q,${data},Z)->\n`);
        const stack = new Stack;
        for(let i = 0; i<data.length; i++){
            size = stack.getSize();
            console.log(size);
            for(let r = 0; r < size; r++){
                xsubstring += "X";    
            }
            substring = data.substring(i,data.length);
            fs.appendFileSync('output.txt', `d(${state},${substring},${xsubstring}Z)->\n`);
            
            if(data[i] == 0){
                stack.push("X");
            } else {
                state="p";
                stack.pop();
            };
            
            substring = "";
            xsubstring="";
        }
        fs.appendFileSync('output.txt', `d(p,e,Z)->\n`);
        fs.appendFileSync('output.txt', `d(f,e,Z)`);
        let process = fs.readFileSync('output.txt');
        res.render('stackAnimation.html', {process: process});
    }else{
        res.render('stackAnimation.html', {process: "Cadena inválida, no hay la misma cantidad de 0 y 1"});
    }
});

module.exports = router;