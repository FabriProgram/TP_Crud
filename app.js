const express=require('express'); //  INVOCACION DE LIBRERIA 

//  DEFINICIÓN DE APLICACIONES Y CONSTANTES
    //  LIBRERIA
const app=express(); 
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json);
    // CONEXION CON ROUTER.JS
app.use('/', require('./router'));
    //  CONSTANTES
const port=3001;

// CONFIRMACION DE SERVER NE LINEA  
app.listen(port,()=>(
    console.log(`Server inicializdo en puerto ${port}`)
    ));