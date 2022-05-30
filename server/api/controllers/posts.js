// const express = require('express');
// const router = express.Router();

// const Article = require('../models/post');

// // articles show route
// router.get('/:id', async (req, res) => {
//     try {
//         const article = await Article.findById(parseInt(req.params.id))
//         res.json(article)
//     } catch(err) {
//         res.status(404).json({err})
//     }
// })

// // Create article route
// router.post('/', async (req, res) => {
//     try {
//         const article = await Article.create(req.body.title, req.body.name, req.body.body, req.body.url_end )
//         res.json(article)
//     } catch(err) {
//         res.status(404).json({err})
//     }
// })
