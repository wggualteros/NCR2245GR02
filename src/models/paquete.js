const mongoose = require("mongoose");
const { Schema } = mongoose;

const paqueteSchema = new Schema({
  idorden: { type: Number, required: true },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  largo: { type: String, required: true },
  ancho: { type: String, required: true },
  alto: { type: String, required: true },
  peso: { type: String, required: true },
  direccionrecogida: { type: String, required: true },
  ciudad: { type: String, required: true },
  nombredestina: { type: String, required: true },
  identificaciondestina: { type: String, required: true },
  direccionentrega: { type: String, required: true },
  ciudadentrega: { type: String, required: true },
  estado: { type: String, required: true },
});

module.exports = mongoose.model('paqueteModel', paqueteSchema);
