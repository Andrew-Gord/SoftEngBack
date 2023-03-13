const express = require('express');

const { body } = require('express-validator');

const leaderboardController = require ('../controllers/leaderboard');

const auth =  require('../middleware/auth');

const router = express.Router();

router.get('/', auth, leaderboardController.fetchAll);

router.post('/',
    [
      auth,
      body('column').trim().isLength({ min: 1 }).not().isEmpty(),
      body('id').trim().isLength({max:1}).not().isEmpty(),
    ],
    leaderboardController.update
  );


module.exports = router;