require('dotenv').config(); //Cargar variables de entorno

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const cfenv = require("cfenv");

const app = express();

const port = process.env.PORT || 4000;

//Conexion BD
var db = "";

try {

    mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log(err));

} catch (error) {
    console.log("Could not connect")
}



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tareas' , require('./routes/tareas-routes'))

app.listen(port, () => {
    console.log("Servidor escuchando...");
});

