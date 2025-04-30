var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var sequelize = require('./models').sequelize;


var indexRouter = require('./routes/index');
var ceremonialistRouter = require('./routes/ceremonialist')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json()); /// permite leitura de json 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ceremonialist',ceremonialistRouter);

var db = require('./models');

async function applyDataStructure(){
    await db.sequelize.sync({alter:true});
}

applyDataStructure()

// if (process.env.NODE_ENV !== 'production') {
//     sequelize.sync({ force: true }) // use 'force: true' para recriar as tabelas a cada inicialização (útil em dev)
//         .then(() => {
//             console.log('Banco de dados sincronizado');
//         })
//         .catch(err => {
//             console.error('Erro ao sincronizar o banco de dados:', err);
//         });
// }

var port = 8080;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
module.exports = app;
