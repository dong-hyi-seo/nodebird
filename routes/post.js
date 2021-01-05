const express = require('express');
const router = express.Router();

router.post('/api/posts',(req, res) => {
    res.json([
        {id: 1, content: 'hello express'}
    ])
})

module.exports = router;

