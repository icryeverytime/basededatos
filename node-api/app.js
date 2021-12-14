const express=require('express')
const app=express()
const cors=require('cors')
const mysql=require('mysql')
app.use(cors())
app.options('*',cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    next();
});
app.post('/login',(req,res)=>{
    let sql="SELECT correo FROM Cliente WHERE correo=? AND contra=?"
    let sql2="SELECT correo FROM Empleado WHERE correo=? AND contra=?"
    console.log(req.body)
    var con=mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456789",
        database: "Paleteria"
    })
    con.connect(function(err){
        if(err)
        {
            res.send(err)
            res.end
        }
        else{
            con.query(sql2,[req.body.correo,req.body.contra],function(err,result,fields){
              if(err)
              {
                  console.log(err)
                  res.send(err)
                  res.end
              }
              if(result.length>0)
              {
                  res.send("empleado "+result[0].correo)
                  res.end               
              }  
              else{
                  con.query(sql,[req.body.correo,req.body.contra],function(err,result,fields){
                      if(err)
                      {
                          console.log(err)
                          res.send(err)
                          res.end
                      }
                      if(result.length>0)
                      {
                          res.send("cliente "+result[0].correo)
                          res.end
                      }
                      else{
                          res.send("nada")
                          res.end
                      }
                  })
              }
            })
        }
    })
  })
app.post('/registroE',function(req,res){
    console.log(req.body)
    let post={
        correo: req.body.correo,
        nombre: req.body.nombre,
        numerotelefono: req.body.numero,
        calle: req.body.calle,
        nuexterior: req.body.nuexterior,
        colonia: req.body.colonia,
        municipio: req.body.municipio,
        pais: req.body.pais,
        contra: req.body.contra
    }
    let sql="SELECT correo FROM Cliente WHERE Correo=?"
    let sql2='INSERT INTO Empleado SET ?'
    let sql3="SELECT correo FROM Empleado WHERE Correo=?"
    var con=mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'Paleteria'
    })
    con.connect(function(err){
        if(err)
        {
            res.send(err)
            res.end
        }
        else
        {
            con.query(sql,[req.body.correo],function(err,result,fields){
                if(err)
                {
                    res.send(err)
                    res.end
                }
                else{
                    if(result.length>0)
                    {
                        res.send("correo")
                        res.end
                    }
                    else{
                        con.query(sql2,post,function(err,result,fields){
                            console.log(err)
                            if(err)
                            {
                                if(err.sqlMessage.includes("Empleado.coreo"))
                                {
                                    res.send("correo")
                                    res.end
                                }
                            }
                            else{
                                res.send("ingresado")
                                res.end
                            }
                        })
                    }
                }
            })
        }
    })
})
app.post("/registro",function(req,res){
    let post={
        Nombre:req.body.nombre,
        correo:req.body.correo,
        contra:req.body.contra,
        numerotelefono:req.body.numero
    }
    let sql2="SELECT correo FROM Empleado WHERE correo=?"
    let sql='INSERT INTO Cliente SET ?'
    var con=mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456789",
        database: "Paleteria"
    })
    con.connect(function(err){
        if(err)
        {
            console.log(err)
            res.send(err)
            res.end
        }
        else{
            con.query(sql2,[req.body.correo],function(err,result,fields){
                if(err)
                {
                    res.send(err)
                    res.end
                }
                if(result.length>0)
                {
                    res.send("correo")
                    res.end
                }
                else
                {
                    con.query(sql,post,function(err,result,fields){
                        if(err)
                        {
                            if(err.sqlMessage.includes("Cliente.correo"))
                            {
                                res.send("correo")
                                res.end
                            }
                            else{
                                console.log(err)
                                res.send(err)
                                res.end
                            }
                        }
                        else{
                            res.send(result)
                            res.end
                        }
                    })
                }
            })
        }
    })
})
app.listen(5000,(req,res)=>{
    console.log('Express API esta corriendo en el puerto 5000');
});