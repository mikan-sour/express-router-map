import express from 'express';
import dotenv from 'dotenv';
import router from './router';
import { summary } from './utils';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(router)
app.use(express.static('public'))

app.listen(port, () => {
    console.log('yep')
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
  
summary(router)
