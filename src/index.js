const express = require('express');
const app = express();

//Server settings
app.set(`port`, 3000); //Esto para que se pueda acceder en toda la aplicacion
app.engine('html',require('ejs').renderFile);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

//routes
app.use(require(`./routes/routes.js`));

app.listen(app.get(`port`), ()=>{
    console.log(`Server on port: ${app.get(`port`)}`);
});