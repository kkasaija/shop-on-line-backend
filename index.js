import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to this business API');
});

const port = process.env.PORT || 5000;

app.listen(port, console.log('server running on port', port));
