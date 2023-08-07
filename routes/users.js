const router = require('express').Router();

router.get('/',(req, res) => {
   res.send('This is users ROUT')
});

module.exports = router;