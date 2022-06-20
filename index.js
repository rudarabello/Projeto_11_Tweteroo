
import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const body = req.body;
    if (body.username === '' || body.avatar === '') {
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        users.push({ ...req.body });
        res.status(201).send('OK');
    }

});

app.post('/tweets', (req, res) => {
    const body = req.body;
    if (body.username === '' || body.tweet === '') {
        res.status(400).send('Todos os campos são obrigatórios!');
    }
    let usr = req.body.username
    let loged = users.find(e => e.username === usr)
    tweets.push({
        username: usr,
        tweet: req.body.tweet,
        avatar: loged.avatar
    });
    res.status(201).send('OK');
});

app.get("/tweets", (req, res) => {
    let data = tweets.slice(-10);
    res.status(201).send(data);
});

app.listen(5000);
