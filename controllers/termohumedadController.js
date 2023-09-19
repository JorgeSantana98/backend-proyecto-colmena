const Colmena = require("../models/termohumedad");

exports.obtenerTermohumedad = async (req, res) => {

    try {

        const colmena = await Colmena.find();
        res.json(colmena)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUno = async (req, res) => {
    try {
        let colmena = await Colmena.findById(req.params.id);

        if(!colmena) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
        res.json(colmena);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

