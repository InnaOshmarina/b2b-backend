const express = require('express');
const router = express.Router();

// @route          GET api/users/test
// @description    Tests users route
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;