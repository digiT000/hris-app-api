import express from "express";
import environment from "dotenv";
import employeeRouter from "./routers/employee.router";
import hrRouter from "./routers/hr.router";

// init express
const app = express();
const port = 8000;

// To make sure the body that passing within the backend is in format json
app.use(express.json());

app.use("/api/v1", employeeRouter);
app.use("/api/v1", hrRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
