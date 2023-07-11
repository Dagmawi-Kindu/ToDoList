import { AppDataSource } from './data-source';
import { User } from './models/User';
import * as express from 'express';
import * as cors from 'cors';
import * as http from 'http';
const app = express();
app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: '*',
    allowedHeaders: '*',
  })
);

const server = http.createServer(app);
app.use(express.json());

AppDataSource.initialize()
  .then(async () => {
    console.log('Database started sucessfully!');
  })
  .catch((error) => console.log(error));

server.listen(5000, () => {
  console.log('Server started successfully');
});
