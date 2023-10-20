// CONEXION CON ARCHIVO DE BASE DE DATOS
const conexion=require('../database/db'); 

// INVOCACION MÉTODO SAVE
exports.save=(req,res)=>{
    //  CAPTURA DEL INPUT DEL BODY EN CREATE.EJS 
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const mail=req.body.mail;
    const cursos=req.body.cursos;
    conexion.query(
        //  INSERCION DE LA INFO CAPTURA EN BASE DE DATOS
        'INSTERT INTO alumno SET ?',
        {nombre:nombre, apeliido:apellido, mail:mail, cursos:cursos},
        (error,results)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
    })
};

// INVOCACION MÉTODO UPDATE
exports.update = (req,res)=>{
    //  CAPTURA DEL INPUT DEL BODY EN EDIT.EJS
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const mail=req.body.mail;
    const cursos=req.body.cursos;
    conexion.query(
        //  INSERCION DE LA INFO CAPTURA EN BASE DE DATOS
        'UPDATE alumno SET ? WHERE id = ?',
        [{nombre:nombre, apellido:apellido, mail:mail, cursos:cursos}, id],
        (error, results)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        }
    )
}