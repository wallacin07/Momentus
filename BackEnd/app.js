const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const sequelize = require('./models').sequelize;

const indexRouter = require('./routes/index');
const ceremonialistRouter = require('./routes/ceremonialist')
const clientRouter = require('./routes/client');
const supplierRouter = require('./routes/supplier');
const taskRouter = require('./routes/task');
const eventRouter = require('./routes/event');
const deliveresRouter = require('./routes/deliveres');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ceremonialist',ceremonialistRouter);
app.use('/client',clientRouter);
app.use('/supplier',supplierRouter);
app.use('/task',taskRouter);
app.use('/event',eventRouter);
app.use('/deliveres',deliveresRouter);

const db = require('./models');

async function applyDataStructure(){
    await db.sequelize.sync({alter:true});
}

applyDataStructure()

const port = 8080;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
module.exports = app;
