//version de imports
import express  from 'express';
import router from './routes/index.js';


const app = express();
//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine','pug');

//definir la carpeta publica 

app.use(express.static('public'));

//agregar router 
app.use('/', router);


app.listen(port,()=>{
    console.log(`El sevidor esta funcionanod en el puerto ${port}`);
});