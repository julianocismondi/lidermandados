const express = require('express');
const app = express();
const cookiePasrser = require('cookie-parser');
const mongoose = require ('mongoose');
const userRouter = require ('./routes/User');
const branchofficeRouter = require('./routes/BranchOffice');


app.use(cookiePasrser());
app.use(express.json());


const URI = 'mongodb://localhost/lider_db'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DataBase is connected'))
.catch(err => console.error(err));


app.use('/api/user', userRouter);

app.use('/api/branchoffice', branchofficeRouter);





app.listen(5000, () => {
    console.log('Server on port 5000');
})