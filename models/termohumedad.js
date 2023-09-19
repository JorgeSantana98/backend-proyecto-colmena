// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const colmenaSchema = new Schema(
//   {
//     _id: { type: String, required: true },
//     payload: { type: Object, required: true },
//     _msgid: { type: String, required: true }
//   },
//   {
//     versionKey: false,
//     timestamps: false,
//   }
// );

// module.exports = mongoose.model("TermoHumedad", colmenaSchema);
const mongoose = require('mongoose');

const ColmenaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  }
});
  
module.exports = mongoose.model('Termohumedad', ColmenaSchema,'Termohumedad')
//module.exports = mongoose.model('NombreColeccionNueva', NombreDelSchema,';NombreColeccionExistenteEnMongoDB') Nota: Si no existe la coleccion la crea automaticamente