//API
const router = require('express').Router();

router.use('/nodes',require('./nodes'))
router.use('/relationships',require('./relationships'))

module.exports = router;