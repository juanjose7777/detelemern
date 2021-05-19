const express = require('express');
const cors = require('cors');
const app = express();

//opciones
app.set('port', process.env.PORT || 4000);

//middleware(funciones antes de que lleguen a las rutas)
app.use(cors());
app.use(express.json());
//routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))


module.exports = app;