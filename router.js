const express=require('express'); //  INVOCACION DE LIBRERIA

// DEFINICION DE APLICACIONES Y CONSTANTES
const router=express.Router();
const conexion=require('./database/db')

// RUTAS DE COMUNICACION
    // RUTA A INDEX
router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM alumno', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results:results});
        }
    })
});

    //  RUTA A CREATE
router.get('/create',(req,res)=>{
    res.render('create');
});

    // RUTA A EDIT
router.get('/edit/:id',(req,res)=>{
    const id=req.params.id;
    conexion.query(
        'SELECT * FROM alumno WHERE id=?',[id], (error, results)=>{
            if(error){
                throw error;
            }else{
                res.render('edit',{alumno:results[0]});
            }
        }
    )
})

    //  RUTA A DELETE
router.get('/delete/:id', (req,res)=>{
    conexion.query(
        'DELETE FROM alumno WHERE id = ?',
        [id], (eror,results)=>{
            if(error){
                throw error;
            }else{
                res.redirect('/');
            }
        }
    )
})

//  COMUNICACION CON ARHIVO CRUD
const crud=require('./controllers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)

//  MODULO EXPORTADO
module.exports=router;