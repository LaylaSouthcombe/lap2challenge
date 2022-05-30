const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());
const Article = require('./models/post');

// const articleRoutes = require('./controllers/posts')

server.get('/', (req, res) => res.send('Hello, world!'));

// articles show route
server.get('/:url_end', async (req, res) => {
    try {
        const article = await Article.findByUrlEnd(parseInt(req.params.url_end))
        res.json(article)
    } catch(err) {
        res.status(404).json({err})
    }
})

// Create article route
server.post('/', async (req, res) => {
    try {
        const article = await Article.create(req.body.title, req.body.name, req.body.body, req.body.url_end )
        res.json(article)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = server;