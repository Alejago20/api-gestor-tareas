import express from "express";
import morgan from 'morgan';
import userRouter from './routes/user.route.js'
import taksRoutes from "./routes/task.route.js"
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser());

app.use('/api',userRouter);
app.use("/api", taksRoutes);

export default app;
