
import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    users.push({
        username: req.body.username,
        avatar: req.body.avatar
    });
    res.status(201).send('OK');
});

app.post('/tweets', (req, res) => {
    tweets.push({
        username: req.body.username,
        tweet: req.body.tweet,
    });
    res.status(201).send('OK');
});


app.get('/tweets', (req, res) => {    
    tweets = tweets.slice(-10);
    res.status(201).send(tweets);
})


app.listen(5000);
