import express from 'express';
import morgan from "morgan";
import cors from "cors";
import homeRoutes from "./routes/home.routes.js";
const app = express();

// configuraciones 
app.set('port', process.env.PORT || 3000);
app.set('url', `http://localhost:${app.get('port')}`);



// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// rutas
app.use(homeRoutes);

export default app;