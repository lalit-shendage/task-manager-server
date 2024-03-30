import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes.js';
import database from './config/db.js'
import cors from 'cors'

const app = express();

database();

const PORT= process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
