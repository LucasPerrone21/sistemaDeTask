import express from 'express';
import { router } from './routes/router';

const app = express();

app.use(express.json());
app.use(router);

app.listen(8000 , ()=>{
    console.log('Server is running on port 8000');
})