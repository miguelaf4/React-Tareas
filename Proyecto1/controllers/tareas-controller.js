const Tarea = require('../models/tarea');

function createTarea( req, res ) {
    let tarea = new Tarea({
        id: req.body.id,
        name: req.body.name,
        puntos: req.body.puntos,
        materia: req.body.materia,
        fechaEntrega: req.body.fechaEntrega,
        fechaCreacion: req.body.fechaCreacion

    });

    tarea.save( (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "client error",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "sucess",
            data: result,
            code: 10
        });
    });
}

function updateTarea(req, res) {
    const tarea_id = req.params.id;
    const data = req.body;
    Tarea.findByIdAndUpdate(tarea_id, data, {new: true}, (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "sucess",
            data: result,
            code: 10
        });
    });
}


function getAllTareas(req, res){
    Tarea.find().exec( (error, tareas) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "server error",
                code: 0
            });
        }
        return res.status(200).json({
            error: false,
            message: "sucess",
            data: tareas,
            code: 10
        });
    });
}

function deleteTarea(req, res){
    const tarea_id = req.params.id;
    Tarea.findOneAndDelete({id: tarea_id} , (error, result) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "server error",
                code: 0
            });
        }
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Not found",
                code: 20
            });
        }
        return res.status(200).json({
            error: false,
            message: "sucess",
            data: result,
            code: 10
        });
    });
}

module.exports = {
    createTarea,
    updateTarea,
    getAllTareas,
    deleteTarea
} 
