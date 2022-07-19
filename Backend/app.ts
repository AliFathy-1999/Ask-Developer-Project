import express, {Application} from 'express';
const app :Application = express();
const cors = require('cors');
require("./DB/connect");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
const userRoutes=require("../Backend/Routes/userRoutes.ts")
app.use('/api/user',userRoutes);
const questionRoutes=require("../Backend/Routes/questionRoutes.ts")
app.use('/api/question',questionRoutes);
module.exports = app;
