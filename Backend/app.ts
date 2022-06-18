import express, {Application} from 'express';
const app :Application = express();
const userRoutes=require("../Backend/Routes/userRoutes.ts")
app.use('/user',userRoutes);

module.exports = app;
