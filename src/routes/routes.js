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
    /*if(contador0 == contador1){
        let processString = `d(q,${data},Z)->\n`;
        fs.createWriteStream('output.txt');//Se crea un nuevo archivo
        fs.appendFileSync('output.txt', processString);
        let stringToAdd = "";
        let xStringToAdd="";
        let process = "q";
        for(let m = 0; m < data.length-1; m++){
            for(let i = m+1; i<data.length; i++){
                stringToAdd+=data[i];
                
                if(i-1>=contador0) process="p";
            }
            for(let k = i; k<contador0 ; k--){
                xStringToAdd+="X";
            }
            fs.appendFileSync('output.txt', `d(${process},${stringToAdd},${xStringToAdd}Z)->\n`);
            stringToAdd="";
            xStringToAdd="";
        }
        fs.appendFileSync('output.txt', `d(p,e,Z)->\n`);
        fs.appendFileSync('output.txt', `d(f,e,Z)`);
        //Aplication
        const stack = new Stack();
        for(let i = 0; i<data.length; i++){
            if(data[i] == 0){
                stack.push("X");
            } else {
                stack.pop()
            };
        }
        console.log(stack);
        

        res.render('stackAnimation.html');
    }else{
        console.log("Cadena invalida");
        res.redirect('/');
    }*/
});

module.exports = router;