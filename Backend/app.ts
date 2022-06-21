import express, {Application} from 'express';
const app :Application = express();
const cors = require('cors');
require("./DB/connect");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
const userRoutes=require("../Backend/Routes/userRoutes.ts")
app.use('/api/user',userRoutes);
module.exports = app;
