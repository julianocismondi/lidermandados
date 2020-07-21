const express = require('express');
const app = express();
const cookiePasrser = require('cookie-parser');
const mongoose = require ('mongoose');
const userRouter = require ('./routes/User');
const branchofficeRouter = require('./routes/BranchOffice');
const clientRouter = require('./routes/Client');
const orderRouter = require('./routes/Order');


app.use(cookiePasrser());
app.use(express.json());


const URI = 'mongodb://localhost/lider_db'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DataBase is connected'))
.catch(err => console.error(err));

//RUTAS
app.use('/api/user', userRouter);

app.use('/api/branchoffice', branchofficeRouter);

app.use('/api/client', clientRouter);

app.use('/api/order', orderRouter);






app.listen(5000, () => {
    console.log('Server on port 5000');
})