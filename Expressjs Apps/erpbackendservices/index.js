import express from 'express';
import mongoose from 'mongoose';
import newEmployeeRouter from './routes/addEmployeeService.js';
import getAllEmployeesRouter from './routes/getAllEmployeesService.js';
import getEmployeeByIdRouter from './routes/getEmployeeByIdService.js';
import updateEmployeeRouter from './routes/updateEmployeeByIdService.js';
import deleteEmployeeRouter from './routes/deleteEmployeeByIdService.js';
const app = express();

//middleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//how to connect mongodb datbase
mongoose.connect("mongodb://127.0.0.1:27017/erp")
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));

//router logic
app.use("/add",newEmployeeRouter);
app.use("/getAll",getAllEmployeesRouter);
app.use("/getById",getEmployeeByIdRouter);
app.use("/update",updateEmployeeRouter);
app.use("/delete",deleteEmployeeRouter);
//server logic
app.listen(4000,
    ()=>console.log("server running on port 4000!!!"));