import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import 'dotenv/config'
const app = express();

app.use(cors())
app.use(bodyParser.json({type: 'application/json'}))


app.get("/",(req,res) =>{
    res.send("<h1>Reposicion Corto 1</h1>")
})

app.get("/nota",(req,res) =>{
    const name = 'Carlos David Ramirez Altan';
    const carnet = process.env.CARNET;
    const nota = process.env.NOTA;
    res.json({"carnet":carnet, "nombre":name, "nota":nota})
})

app.listen(9000,() =>{
    console.log('Servidor escuchando en puerto 9000')
})