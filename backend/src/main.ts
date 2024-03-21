import express from 'express'
import usersRouter from '../src/routes/requests';
import cors from 'cors';

const app = express()
const port = 3000

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Routes
// use import to use routes
app.use('/requests', usersRouter);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
