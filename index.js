import express from 'express';
import bodyParser from 'body-parser';
import Route from './routes/index';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Route);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Population Management API',
    data: []
  });
});

const port = process.env.port || 6000;

app.listen(port, () => {
  console.log('We are live');
})