import mongoose from "mongoose";

const schemaCiudad = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const schemaComentario = new mongoose.Schema(
  {
    texto: {
      type: String,
      required: true,
    },
    usuario: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const schemaAsistenteConferencista = new mongoose.Schema(
  {
    identificador: {
      type: String,
      required: true,
    },
    nombreUsuario: {
      type: String,
      required: true,
    },
    nombreCompleto: {
      type: String,
      required: true,
    },
    tipoRelacion: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    ciudad: schemaCiudad,
  },
  { _id: false }
);

const schemaFacultadPrograma = new mongoose.Schema(
  {
    codigo: {
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const schemaEvento = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  categorias: [
    {
      type: String,
      required: true,
    },
  ],
  fecha: {
    type: Date,
    required: true,
  },
  lugar: {
    nombre: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    ciudad: schemaCiudad,
  },
  asistentes: [schemaAsistenteConferencista],
  conferencistas: [schemaAsistenteConferencista],
  facultadesOrganizadoras: [schemaFacultadPrograma],
  programasOrganizadores: [schemaFacultadPrograma],
  comentarios: [schemaComentario],
});

const Evento = mongoose.model("Evento", schemaEvento);

export default Evento;
