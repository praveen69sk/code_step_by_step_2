import EventEmitter from 'events';
import express from 'express';

const app = express();
const event = new EventEmitter();

let count = 0;

event.on('count-api', ()=>{
    count++;
    console.log('count event called', count)
})

app.use(express.json());

app.get('/', (req, resp)=>{
    resp.send('Home API called');
    event.emit('count-api');
})

app.listen(4500);

