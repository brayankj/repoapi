
const express = require('express');
const mongoose = require('mongoose'); 
mongoose.set('useCreateIndex', true);

const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 7000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/bdReact',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//rutas
app.use('/api/usuarios/',require('./routes/RoutesUsuarios'));
app.use('/api/productos/',require('./routes/RoutesProductos'));
app.use('/api/listas/',require('./routes/RoutesLista'));



app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});